import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { useStyles } from "./AppBarStyle.js";
import img from "./ryan-logo-sm.png";
import Email from "@material-ui/icons/Email";

function AppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <img src={img} alt="" className={classes.logo} />
        <span className={classes.socials}>
          <IconButton aria-label="Email" href="mailto:rdturner40@gmail.com">
            <EmailIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
            />
          </IconButton>
          <IconButton
            aria-label="Linked In"
            href="https://www.linkedin.com/in/rdturner40/"
            target="_blank"
          >
            <LinkedInIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
            />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/Too-Far"
            target="_blank"
          >
            <GitHubIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
            />
          </IconButton>
        </span>
      </Paper>
    </div>
  );
}

export default AppBar;
