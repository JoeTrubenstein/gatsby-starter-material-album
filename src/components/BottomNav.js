import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MobileStepper from "@material-ui/core/MobileStepper";

import { makeStyles } from "@material-ui/core/styles";

export default function BottomNav(props) {
  const [activeStep, setActiveStep] = useState(props.currentPage);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <MobileStepper
        variant="dots"
        steps={props.numPages}
        position="static"
        activeStep={activeStep - 1}
        className={classes.root}
        nextButton={
          <Button
            href={props.nextPage}
            size="small"
            onClick={handleNext}
            disabled={activeStep === props.numPages}
          >
            Next
            {props.theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            href={props.prevPage}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 1}
          >
            {props.theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Container>
  );
}
