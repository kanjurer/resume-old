import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

import NavDrawer from "./components/NavDrawer";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Academics from "./components/Academics";
import HireMe from "./components/HireMe";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
  },
  content: {
    display: "flex",
    flexGrow: 1,
    marginRight: 100,
  },
  grid: {
    position: "relative",
    width: "1200px",
    left: "80px",
  },
  imagePaper: {
    position: "static",
  },
  paper: {
    marginRight: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {" "}
      <CssBaseline />
      <Router>
        <NavDrawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={3} className={classes.grid}>
            <Fade timeout={2000} in={true} mountOnEnter unmountOnExit>
              <Grid item xs={matches ? 12 : 5} key="image">
                <div className={classes.imagePaper}>
                  <img
                    alt=""
                    src="me.jpg"
                    style={{ display: "block", margin: "auto", width: "360px" }}
                  />
                  <HireMe style={{}} />
                </div>
              </Grid>
            </Fade>
            <Fade timeout={2000} in={true} mountOnEnter unmountOnExit>
              <Grid item xs={matches ? 12 : 7} key="content">
                <Paper className={classes.paper} elevation={1}>
                  {" "}
                  <Switch>
                    <Route key="profile1" path="/" component={Profile} exact />
                    <Route
                      key="profile2"
                      path="/profile"
                      component={Profile}
                      exact
                    />
                    <Route
                      key="contact"
                      path="/contact"
                      component={Contact}
                      exact
                    />
                    <Route key="work" path="/work" component={Work} exact />
                    <Route
                      key="academics"
                      path="/academics"
                      component={Academics}
                      exact
                    />
                  </Switch>
                </Paper>
              </Grid>
            </Fade>
          </Grid>
        </main>
      </Router>
    </>
  );
}
