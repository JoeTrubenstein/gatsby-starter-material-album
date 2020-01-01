import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function Footer() {
  const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Gatsby Material Album
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        An impeccable pairing
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Built with "}
        <a color="inherit" href="https://material-ui.com/">
          Material-UI
        </a>
        {" by "}
        <a color="inherit" href="https://github.com/joeTrubenstein">
          @JoeTrubenstein
        </a>
      </Typography>
    </footer>
  );
}
