import React from "react";
import { useStyles } from "./HomeStyle";
import { CssBaseline, Typography } from "@material-ui/core";

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.homeWrapper}>
      <div className={classes.right}>
        <div className={classes.inline}>
          <Typography variant="h2" color="primary">
            Hello, My name is
          </Typography>
          <Typography variant="h2" color="secondary" className={classes.h3}>
            :
          </Typography>
        </div>
        <div className={classes.name}>
          <Typography variant="h3" color="secondary">
            Ryan
          </Typography>
          &nbsp
          <Typography variant="h3" color="secondary" className={classes.h3}>
            Turner
          </Typography>
        </div>
        <div className={classes.blurb}>
          <Typography variant="h5" className={classes.blurbInner}>
            A Creative
          </Typography>
          &nbsp
          <Typography variant="h4" color="primary" className={classes.h3}>
            full stack
          </Typography>
          &nbsp
          <Typography variant="h5" className={classes.blurbInner}>
            {" "}
            developer.{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;
