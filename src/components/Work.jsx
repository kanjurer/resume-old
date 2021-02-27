import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Tabs from "./Tabs";
import { default as data } from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grid: {
    position: "relative",
    width: "1200px",
    left: "80px",
  },
  rightContent: {
    flexGrow: 1,
  },
}));

export default function Work(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div classNam={classes.rightContent}>
        {" "}
        <Typography variant="h2" component="h2" gutterBottom>
          work experience
        </Typography>
        <br />
      </div>
      {data.workExperience.map((item) => {
        return (
          <>
            <div className={classes.rightContent}>
              <Typography variant="h4" component="h4" gutterBottom>
                {item.name}
              </Typography>

              <Tabs
                designation={item.designation}
                from={item.from}
                to={item.to}
                description={item.description}
                reviews={item.reviews}
              />
            </div>
            <br />
            <Divider />
            <br />
          </>
        );
      })}
    </>
  );
}
