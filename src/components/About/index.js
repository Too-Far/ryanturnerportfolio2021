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
            Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
            yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
            grog yardarm hempen halter furl. Swab barque interloper chantey
            doubloon starboard grog black jack gangway rutters. Deadlights jack
            lad schooner scallywag dance the hempen jig carouser broadside cable
            strike colors. Bring a spring upon her cable holystone blow the man
            down spanker Shiver me timbers to go on account lookout wherry
            doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm
            spyglass sheet transom heave to.
          </Typography>
        </div>
      </div>
    </Rotate>
  );
}

export default About;
