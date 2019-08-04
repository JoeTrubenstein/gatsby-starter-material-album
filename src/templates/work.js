import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: `center`,
    maxWidth:`400px`,
    margin:`auto`
  },
  wrapper: {
      textAlign:`center`
  }
}));

export default function Work(props) {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <h1>Oh hello</h1>
      <Paper className={classes.root}>
        <h3>This work</h3>
        <Img fluid={props.data.file.childImageSharp.fluid} />
      </Paper>
    </Container>
  );
}

export const pageQuery = graphql`
  query workOfArt($slug: String!) {
    file(name: { eq: $slug }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
