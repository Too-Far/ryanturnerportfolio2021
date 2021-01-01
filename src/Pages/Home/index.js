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
        </div>
        <div className={classes.name}>
          <Typography variant="h3" color="secondary">
            Ryan{"\u00A0"}
          </Typography>
          <Typography variant="h3" color="secondary" className={classes.h3}>
            Turner
          </Typography>
        </div>
        <div className={classes.blurb}>
          <Typography variant="h5" className={classes.blurbInner}>
            A Creative{"\u00A0"}
          </Typography>
          <Typography variant="h4" color="primary" className={classes.h3}>
            full stack{"\u00A0"}
          </Typography>
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
