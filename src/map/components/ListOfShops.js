import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Shop from "./Shop";

import "../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function FolderList(props) {
  const classes = useStyles();

  const { shops } = props;

  return (
    <List className={classes.root}>
      {shops.map(shop => {
        return <Shop key={shop.id} shop={shop} />;
      })}
    </List>
  );
}
