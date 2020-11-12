import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Head from "next/head";
import Header from "../src/components/header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    background: "#efe9e4",
  },
  pTagRules: {
    fontFamily: "minerva-modern",
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="xl" className={classes.container}>
        <Head>
          <title>Create Next App</title>
          <link href="/fonts/kaftan_Serif/style.css" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h1" component="h1" gutterBottom>
                  Miriam
                </Typography>
                <Grid item xs={6}>
                  <Typography variant="h1" component="h1" gutterBottom>
                    Brellenthin.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <h1>Photo is going here</h1>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.pTagRules}
              variant="h4"
              component="h1"
              gutterBottom
            >
              Originally from Germany, Miriam is a Graphic Designer &
              Photographer currently based in Vancouver, Canada, with a focus on
              Editorial Design, Web Design, Photography and Creative Direction.
              Completing numerous internships in Bangkok, Helsinki and in
              Germany, a Foundation course in Fine Arts & Design in Falmouth, UK
              and a three year graphic design course in Bavaria, Germany.
            </Typography>
          </Grid>

          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Grid>
      </Container>
    </>
  );
}
