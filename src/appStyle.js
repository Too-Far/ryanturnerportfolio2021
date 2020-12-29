import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  appWrapper: {
    display: "flex",
    backgroundColor: "black",
  },
  left: {
    position: "left",
    width: "20%",
  },
  spine: {
    width: ".2em",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    marginLeft: "90%",
    backgroundImage:
      "repeating-linear-gradient(top, #050505 0%, #582ae9 30%, #131313 100%)",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
  },
});
