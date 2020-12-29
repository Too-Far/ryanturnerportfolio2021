import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  aboutWrapper: {
    display: "flex",
    flexDirextion: "row",
    marginTop: "3em",
    alignContent: "flex-end",
  },
  title: {
    color: "#808080",
    marginBottom: ".5em",
  },
  text: {
    color: "#808080",
    textAlign: "center",
  },
  photo: {
    width: "70%",
    height: "70%",
    marginRight: "3em",
    opacity: "0.8",
    borderRadius: "10px",
  },
});
