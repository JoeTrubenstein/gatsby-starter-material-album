const path = require(`path`);
const { createFilePath, createNodeField } = require(`gatsby-source-filesystem`);
const fastExif = require("fast-exif");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const artWork = path.resolve(`./src/templates/photo.js`);
  return graphql(
    `
      {
        allFile(filter: { extension: { regex: "/(jpg)/" } }) {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const works = result.data.allFile.edges;

    // Create a new page from each image file
    works.forEach((work, index) => {
      createPage({
        path: work.node.name,
        component: artWork,
        context: {
          slug: work.node.name
        }
      });
    });

    // Create the paginated home view
    const cardsPerPage = 6;
    const numPages = Math.ceil(works.length / cardsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: path.resolve("./src/templates/album.js"),

        // pass variables to the album component using page context
        context: {
          limit: cardsPerPage,
          skip: i * cardsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // create a slug out of the image's filename
  if (node.internal.type === `File`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }

  // create custom node fields containing exif data for each image file
  if (node.internal.mediaType === "image/jpeg") {
    fastExif
      .read(node.absolutePath)
      .then(exifData => {

        const description = exifData.image.ImageDescription;
        const title = exifData.image.DocumentName;
        const copyright = exifData.image.Copyright;

        createNodeField({
          name: `exif`,
          node,
          value: { title, description, copyright }
        });
      })
      .then(()=>{
        console.log('node fields created')
      })
      .catch(error => {
        console.log(error);
      });
  }
};
