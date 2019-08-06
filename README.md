# Gatsby Material Album

[![Netlify Status](https://api.netlify.com/api/v1/badges/53d625bc-0c4a-48fe-b188-71b0ba469277/deploy-status)](https://app.netlify.com/sites/gatsby-starter-material-album/deploys)

I've been a big fan of the way Gatsby creates blogs dynamically via Markdown files.

So I figured why not apply the same logic to an image gallery?

This starter uses the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) to accomplish two things.

It creates a new page from each image file,

and creates custom node fields so their exif data can be accessed via GraphQl.

## Getting Started

Either clone the repo with 

```sh
git clone https://github.com/JoeTrubenstein/gatsby-starter-material-album.git
```

Or use the Gatsby CLI

```sh
gatsby new material-album https://github.com/JoeTrubenstein/gatsby-starter-material-album.git
```

then simply run

```sh
yarn
```

to install dependencies

## Adding your own images

This project pulls three specific fields from a given image's exif data using [fast-exif](https://www.npmjs.com/package/fast-exif).

However, you'll need to edit your own image's exif data first.

The best way of accomplishing this appears to be [ExifTool](https://www.sno.phy.queensu.ca/~phil/exiftool/).

Once installed, you can quickly edit your exif data via the CLI as such:

```sh
exiftool -ImageDescription="by Mike Gorrell" -DocumentName="Lost In Thought" -Copyright="https://unsplash.com/@mikegorrell" src/images/mike-gorrell-61cMb0WQAMA-unsplash.jpg
```


## Built With

[Gatsby](https://github.com/gatsbyjs/gatsby)
[Material-UI](https://github.com/mui-org/material-ui)

