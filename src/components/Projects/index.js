import React, { useState } from "react";
import { useStyles } from "./ProjectsStyle.js";
import { Typography, Button, Modal } from "@material-ui/core";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { projects } from "./ProjectInfo";
import ProjectCard from "../ProjectCard";

function Projects(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography variant="h2" color="primary">
        {"<"}Projects /{">"}
      </Typography>
      <div className={classes.slideWrapper}>
        <AwesomeSlider className={classes.slider}>
          {projects.map((e) => (
            <>
              <div className={classes.image}>
                <img src={e.image} alt="" className={classes.photo} />
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="info modal"
                aria-describedby="info modal"
              >
                <ProjectCard info={e} />
              </Modal>
              <Button onClick={handleOpen} variant="contained" color="primary">
                Learn More
              </Button>
            </>
          ))}
        </AwesomeSlider>
      </div>
    </>
  );
}

export default Projects;
