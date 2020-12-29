import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  homeWrapper: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    marginBottom: "24em",
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  name: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: "1em",
    marginLeft: "2em",
  },
  blurb: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1em",
  },
  blurbInner: {
    color: "#808080",
  },
});
