import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Footer from "../components/Footer.js";

export default function Work(props) {
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2)
    },
    root: {
      maxWidth: `700px`,
      margin: `auto`,
      padding: theme.spacing(1)
    },
    title: {
      padding: theme.spacing(8, 0, 6)
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Gatsby Material Album
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.wrapper}>
        <Container className={classes.title}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {props.data.file.fields.exif.title}
          </Typography>
        </Container>
        <Paper className={classes.root}>
          <Img fluid={props.data.file.childImageSharp.fluid} />
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query workOfArt($slug: String!) {
    file(name: { eq: $slug }) {
      fields {
        exif {
          description
          title
        }
      }
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
