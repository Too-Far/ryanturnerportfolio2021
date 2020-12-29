import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  homeWrapper: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
  },
  //   left: {
  //     position: "left",
  //     width: "20%",
  //     height: "100vh",
  //   },
  //   spine: {
  //     width: ".2em",
  //     height: "100%",
  //     marginLeft: "90%",
  //     background:
  //       "linear-gradient(top, #050505 0%, #582ae9 53%, #131313 100%)" /* FF3.6-15 */,
  //   },
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
