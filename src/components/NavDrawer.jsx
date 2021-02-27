import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

import Share from "./Share";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 15px",
    margin: 5,
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 30,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: 170,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NavDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <IconButton
          className={classes.button}
          onClick={!open ? handleDrawerOpen : handleDrawerClose}
        >
          <MenuIcon />
        </IconButton>

        <Divider />
        <List>
          <NavLink
            exact
            to="/"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
          >
            <ListItem button key="Profile">
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>{" "}
              <ListItemText primary="Profile" />{" "}
            </ListItem>{" "}
          </NavLink>
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
          >
            <ListItem button key="Contact">
              <ListItemIcon>
                <CallOutlinedIcon />
              </ListItemIcon>{" "}
              <ListItemText primary="Contact" />{" "}
            </ListItem>{" "}
          </NavLink>{" "}
          <NavLink
            to="/work"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
          >
            <ListItem button key="Work">
              <ListItemIcon>
                <WorkOutlineOutlinedIcon />
              </ListItemIcon>{" "}
              <ListItemText primary="Work" />{" "}
            </ListItem>
          </NavLink>{" "}
          <NavLink
            to="/academics"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "none",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
          >
            <ListItem button key="Academics">
              <ListItemIcon>
                <BookOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Academics" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          <Share />

          <ListItem button key="Download">
            <ListItemIcon>
              <CloudDownloadOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Download" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
