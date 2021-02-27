import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { default as data } from "../data";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Share() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem button key="Share" onClick={handleClickOpen}>
        <ListItemIcon>
          <ShareOutlinedIcon />
        </ListItemIcon>{" "}
        <ListItemText primary="Share" />
      </ListItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Show Your Support!</DialogTitle>
        <DialogContent>
          {data.socialMedia.map((item) => item.button)}
        </DialogContent>
      </Dialog>
    </div>
  );
}
