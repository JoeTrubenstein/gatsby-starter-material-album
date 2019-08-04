import React from "react";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MobileStepper from "@material-ui/core/MobileStepper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Img from "gatsby-image";

export default function WorkList(props) {
    const { currentPage, numPages } = props.pageContext;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
  
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(currentPage);

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      }
    
      function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      }

      const useStyles = makeStyles(theme => ({
        icon: {
          marginRight: theme.spacing(2)
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6)
        },
        heroButtons: {
          marginTop: theme.spacing(4)
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
          paddingTop: "56.25%" // 16:9
        },
        cardContent: {
          flexGrow: 1
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6)
        }
      }));
    
      const classes = useStyles();

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {props.data.allFile.edges.map(card => (
            <Grid item key={card.node.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Img fluid={card.node.childImageSharp.fluid} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.node.name}
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
      {/*  */}
      <Container>
        <MobileStepper
          variant="dots"
          steps={numPages}
          position="static"
          activeStep={activeStep - 1}
          className={classes.root}
          nextButton={
            <Button
              href={nextPage}
              size="small"
              onClick={handleNext}
              disabled={activeStep === numPages}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              href={prevPage}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Container>
    </>
  );
}
