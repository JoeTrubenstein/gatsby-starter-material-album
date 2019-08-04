const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  

  const artWork = path.resolve(`./src/templates/work.js`)
  return graphql(
    `
      {
        allFile(filter: {extension: {regex: "/(jpg)/"}}) {
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
      throw result.errors
    }

    // Create individual artwork pages.
    const works = result.data.allFile.edges

    works.forEach((work, index) => {
      

      createPage({
        path: work.node.name,
        component: artWork,
        context: {
          slug: work.node.name,
        },
      })
    })

    // Create the paginated home view
    const cardsPerPage = 9;
    const numPages = Math.ceil(works.length / cardsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: path.resolve('./src/templates/album.js'),
        context: {
          limit: cardsPerPage,
          skip: i * cardsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

