import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ResumeStyle.js";
import Rotate from "react-reveal";

function Resume() {
  const classes = useStyles();
  return (
    <Rotate>
      <Typography variant="h2" color="primary">
        {"<"}Resume /{">"}
      </Typography>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" className={classes.title}>
          Contact Info:
        </Typography>
        <Typography variant="p" className={classes.text}>
          Email: rdturner40@gmail.com
        </Typography>
        <br />
        <Typography variant="p" className={classes.text}>
          Phone: 321-442-9886
        </Typography>
        <Typography variant="h4" className={classes.title}>
          Work History:
        </Typography>
        <Typography variant="p" className={classes.text}>
          <p>2019-Present: Software Engineer, Whats Cookin</p>
          <p>2018-Present: Registered Nurse, Emergency Department</p>
        </Typography>
      </div>
    </Rotate>
  );
}

export default Resume;
