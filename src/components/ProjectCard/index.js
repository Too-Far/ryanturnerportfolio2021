import React from "react";
import { useStyles } from "./ProjectCardStyle.js";
import { Typography } from "@material-ui/core";

function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.blurb}>
        <Typography variant="h3" color="primary">
          {props.info.name}
        </Typography>
        <p>{props.info.blurb}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
