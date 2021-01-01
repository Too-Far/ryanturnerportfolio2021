import React from "react";
import { useStyles } from "./AboutStyle.js";
import Rotate from "react-reveal";
import img from "./ryan.jpeg";

import { Typography } from "@material-ui/core";

function About(props) {
  const classes = useStyles();
  return (
    <Rotate>
      <Typography variant="h2" color="primary">
        {"<"}About Me /{">"}
      </Typography>
      <div className={classes.aboutWrapper}>
        <img src={img} alt="" className={classes.photo} />
        <div>
          <Typography variant="h3" className={classes.title}>
            A Little Bit of My Story
          </Typography>
          <Typography variant="p" className={classes.text}>
            I am a creative problem solver with years of experience doing just
            that. I have spent the past 20+ years working in the field of
            Emergency Medicine. Everything from combat medic, to paramedic, to
            flight nurse. <br />
            <br />
            In 2018 I decided that I wanted to challenge myself in a different
            way. I took my first online HTML course, and as they say, the rest
            is history.
            <br />
            <br />I have spent the last two years learning and honing my skills.
            I have worked with multiple start-ups, open source projects and
            built countless apps. The one thing that I have learned on this
            journey is that I love to find a problem, then apply sound logic to
            solve that problem.
          </Typography>
        </div>
      </div>
    </Rotate>
  );
}

export default About;
