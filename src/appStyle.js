import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  appWrapper: {
    display: "flex",
    backgroundColor: "#f5f5f5",
  },
  appBar: {
    width: "100%",
  },
  left: {
    position: "left",
    width: "20%",
  },
  spine: {
    width: ".2em",
    height: "100%",
    marginTop: "10em",
    overflowX: "hidden",
    overflowY: "auto",
    marginLeft: "90%",
    backgroundImage:
      "repeating-linear-gradient(top, #f5f5f5 0%, #582ae9 30%, #f5f5f5 100%)",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
  },
});
