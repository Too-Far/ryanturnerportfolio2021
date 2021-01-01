import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  slideWrapper: {
    marginTop: "2em",
    width: "90%",
    textAlign: "center",
  },
  image: {
    width: "97%",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    marginLeft: "1em",
  },
  blurb: {
    backgroundColor: "white",
    marginTop: "-1em",
    position: "absolute",
    top: "50%",
    width: "50%",
    left: "25%",
    textAlign: "center",
  },
});
