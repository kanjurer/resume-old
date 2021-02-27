import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Fade";
import AccessibilityNewOutlinedIcon from "@material-ui/icons/AccessibilityNewOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { red } from "@material-ui/core/colors";

import { default as data } from "../data";

const useStyles = makeStyles({
  root: {
    display: "block",
    margin: "0 auto",
    width: 260,
    position: "relative",
    top: -100,
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 15px",
    margin: 10,
    borderRadius: 10,
  },

  avatar: {
    backgroundColor: red[100],
    color: red[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        Hire Me on these platforms!
      </DialogTitle>
      <List>
        {data.hireMe.map((item) => (
          <a
            href={item.url}
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: 900,
            }}
            target="_blank"
            rel="noreferrer"
            key={item.url}
          >
            <ListItem
              button
              onClick={() => handleListItemClick(item.name)}
              key={item.name}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <AccessibilityNewOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          </a>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function HireMe() {
  const [open, setOpen] = React.useState(false);
  const [love, setLove] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleLove = () => {
    setLove(!!!love);
  };

  return (
    <Zoom timeout={6000} in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <br />
        <Button className={classes.button} onClick={handleClickOpen}>
          HIRE ME! <AccessibilityNewOutlinedIcon />
        </Button>
        <Button className={classes.button} onClick={handleLove}>
          {love ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </Button>{" "}
        <SimpleDialog open={open} selectedValue={""} onClose={handleClose} />
      </div>
    </Zoom>
  );
}
