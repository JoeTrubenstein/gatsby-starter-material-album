import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import BottomNav from "../components/BottomNav.js";

export default function Album(props) {
  const { currentPage, numPages } = props.pageContext;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const theme = useTheme();

  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(1)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "50%"
    },
    cardContent: {
      flexGrow: 1
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
      <main>
        {/*  */}
        <Hero />
        {/*  */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {props.data.allFile.edges.map(card => (
              <Grid item key={card.node.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Img fluid={card.node.childImageSharp.fluid} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.node.fields.exif.title}
                    </Typography>
                    <Typography>
                      <a href={card.node.fields.exif.copyright}>
                        {card.node.fields.exif.description}
                      </a>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={card.node.name} size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/*  */}
      <BottomNav
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        theme={theme}
      />
      {/*  */}
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query allArtQuery($skip: Int!, $limit: Int!) {
    allFile(
      filter: { extension: { regex: "/(jpg)/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          name
          fields {
            exif {
              description
              title
              copyright
            }
          }
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1700, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
