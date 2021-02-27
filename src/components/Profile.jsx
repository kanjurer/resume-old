import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

import CakeSharpIcon from "@material-ui/icons/CakeSharp";

import { ReactComponent as AmazonWebServices } from "../icons/AmazonWebServices.svg";
import { ReactComponent as ReactJS } from "../icons/ReactJS.svg";
import { ReactComponent as MongoDB } from "../icons/MongoDB.svg";
import { ReactComponent as Express } from "../icons/Express.svg";
import { ReactComponent as Node } from "../icons/Node.svg";
import { ReactComponent as NextJS } from "../icons/NextJS.svg";
import { ReactComponent as Bootstrap } from "../icons/Bootstrap.svg";
import { ReactComponent as Javascript } from "../icons/Javascript.svg";
import { ReactComponent as JQuery } from "../icons/JQuery.svg";
import { ReactComponent as MySQL } from "../icons/MySQL.svg";
import { ReactComponent as PHP } from "../icons/PHP.svg";
import { ReactComponent as HTML } from "../icons/HTML.svg";
import { ReactComponent as CSS } from "../icons/CSS.svg";
import { ReactComponent as Wordpress } from "../icons/Wordpress.svg";
import { ReactComponent as GitHub } from "../icons/GitHub.svg";

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

export default function Profile(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div className={classes.rightContent} key="aboutme">
        <Typography variant="h2" component="h2" gutterBottom>
          about me
        </Typography>
        <Typography>{data.aboutMe}</Typography>
        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={6} key="strengths">
            {" "}
            <ul>
              <li style={{ listStyleType: "none" }}>
                <Typography variant="button">Strengths</Typography>
              </li>
              {data.strengths.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </Grid>

          <Grid item xs={6} key="weaknesses">
            <ul>
              <li style={{ listStyleType: "none" }}>
                {" "}
                <Typography variant="button">Weaknesses</Typography>
              </li>
              {data.weaknesses.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </Grid>
        </Grid>
      </div>
      <br />
      <Divider />
      <br />
      <div className={classes.rightContent} key="academiclife">
        <Typography variant="h2" component="h2" gutterBottom>
          academic life
        </Typography>
        <Typography>
          I am currently a{" "}
          <b>
            {data.academicLife[0].year} year {data.academicLife[0].degree}{" "}
          </b>
          student at <b> {data.academicLife[0].college}</b>.{" "}
        </Typography>
      </div>
      <br />
      <Divider />
      <br />
      <div className={classes.rightContent} key="myservices">
        <Typography variant="h2" component="h2" gutterBottom>
          my services
        </Typography>

        <Grid container spacing={3}>
          {" "}
          {data.skills.map((item) => {
            return (
              <Grid item xs={6} key={item.skillName}>
                {item.icon}
                <br />
                <Typography variant="h6" component="h6">
                  {item.skillName}
                </Typography>
                <Typography>{item.skillDetails}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <br />
      <Divider />
      <br />
      <div className={classes.rightContent} key="skills">
        <Typography variant="h2" component="h2" gutterBottom>
          skills
        </Typography>
        <Typography variant="h6" component="h6">
          superpower:
        </Typography>
        <Typography variant="button">
          MERN stack- Future of websites!
          <br />
        </Typography>
        <MongoDB />
        <Express />
        <ReactJS />
        <Node />
        <NextJS />

        <Typography variant="h6" component="h6">
          why? :
        </Typography>
        <Typography>
          MERN stack is completely based on javascript, so lets us handle both
          frontend and backend and works at remarkable speeds in contrast to the
          traditional websites.
        </Typography>
        <br />
        <Typography variant="h6" component="h6">
          other skills:
        </Typography>
        <br />
        <Wordpress />
        <HTML />
        <CSS />
        <Javascript />
        <Bootstrap />
        <JQuery />
        <PHP />
        <MySQL />
        <GitHub />
        <AmazonWebServices />
      </div>
      <br />
      <Divider />
      <br />
      <div className={classes.rightContent} key="personalinformation">
        <Typography variant="h2" component="h2" gutterBottom>
          personal information
        </Typography>
        <Grid container>
          <Grid item xs={matches ? 12 : 6} key="info1">
            <Typography variant="button" display="block" gutterBottom>
              Full Name
            </Typography>
            <Typography>{data.fullName}</Typography>
            <Typography variant="button" display="block" gutterBottom>
              Date Of Birth <CakeSharpIcon />
            </Typography>
            <Typography>
              {data.dobString}({calculateAge(data.dobmmddyyyy)} years)
            </Typography>
          </Grid>
          <Grid item xs={matches ? 12 : 6} key="info2">
            <Typography variant="button" display="block" gutterBottom>
              Languages
            </Typography>
            {data.languages.map((item) => {
              return (
                <>
                  <Typography>{item.name}</Typography>
                  <LinearProgressWithLabel value={item.progress} />
                </>
              );
            })}
          </Grid>
        </Grid>
      </div>
      <br />
      <Divider />
      <br />
    </>
  );
}

function calculateAge(birthDate) {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  birthDate = new Date(birthDate);
  today = new Date(today);

  let years = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
