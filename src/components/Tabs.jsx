import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    size: 200,
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="full width tabs example"
        >
          <Tab label="Job" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Useful Links" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container>
            <Grid item xs={6}>
              {" "}
              <Typography variant="button" display="block" gutterBottom>
                {" "}
                Job :{" "}
              </Typography>{" "}
              <Typography>{props.designation}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button" display="block" gutterBottom>
                Duration :{" "}
              </Typography>{" "}
              <Typography>
                {props.from} - {props.to}
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Typography variant="button" display="block" gutterBottom>
            Description :{" "}
          </Typography>{" "}
          <Typography gutterBottom>{props.description}</Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {props.reviews.map((item) => {
            return (
              <>
                {" "}
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                      {item.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.review}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
      </SwipeableViews>
    </div>
  );
}
