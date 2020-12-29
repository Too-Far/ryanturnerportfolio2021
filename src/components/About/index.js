import React from "react";
import { useStyles } from "./AboutStyle.js";
import Rotate from "react-reveal";

import { Typography } from "@material-ui/core";

function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.aboutWrapper}>
      <Rotate>
        <Typography variant="h2" color="primary">
          {"<"}About Me /{">"}
        </Typography>
      </Rotate>
    </div>
  );
}

export default About;
