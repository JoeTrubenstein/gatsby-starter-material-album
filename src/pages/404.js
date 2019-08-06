import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nothing Here
        </Typography>
        <Link to="/">Go to the main page</Link>
      </Box>
      
    </Container>
  );
}
