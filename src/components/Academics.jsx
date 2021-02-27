import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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

export default function Blog(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.rightContent}>
        <Typography variant="h2" component="h2" gutterBottom>
          academics
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          {" "}
          <b>Education</b>
        </Typography>
        <Typography>
          <b>Dalhousie University, Halifax, NS, Canada</b>
          <br />
          Bachelor of Computer Science Degree: 2021 - 2024 (expected) <br />
          <b>Class: </b> Freshman <br />
          <br />
          <b>Relevant Coursework: </b> <br />
          <br />
        </Typography>
        <br />
        <Divider /> <br />
        <Typography variant="button" display="block" gutterBottom>
          <b>Skills</b>
        </Typography>
        <Typography>
          <b>Programming Languages: </b> <br />
          Java, Python, C, Javascript <br />
          <b>Other Softwares: </b>
          <br />
          MATLAB, Microsoft Office
        </Typography>
        <br /> <Divider /> <br />{" "}
        <Typography variant="button" display="block" gutterBottom>
          <b>Projects</b>
        </Typography>
        <Typography></Typography>
        <br /> <Divider /> <br />
      </div>
      <br />

      <br />
    </>
  );
}
