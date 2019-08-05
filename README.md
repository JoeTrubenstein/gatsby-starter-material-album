# Gatsby Material Album

I was really impressed with the way Gatsby created blogs dynamically via Markdown files.

So I figured why not apply the same logic to images in a gallery?

This starter uses the gatsby-node.js file to create a new page for every image, and creates custom node fields from their exif data.

[![Netlify Status](https://api.netlify.com/api/v1/badges/53d625bc-0c4a-48fe-b188-71b0ba469277/deploy-status)](https://app.netlify.com/sites/gatsby-starter-material-album/deploys)

## Getting Started

Either [clone the repo](https://github.com/JoeTrubenstein/gatsby-starter-material-album.git)

Or use Gatsby CLI

```sh
gatsby new material-album https://github.com/JoeTrubenstein/gatsby-starter-material-album.git
```

Installation

```sh
yarn
```

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

