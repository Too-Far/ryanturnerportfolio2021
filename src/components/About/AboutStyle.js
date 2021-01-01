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
    color: "black",
    textAlign: "center",
  },
  photo: {
    width: "70%",
    height: "70%",
    marginRight: "3em",
    borderRadius: "10px",
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      visibility: "hidden",
      width: "0px",
      marginRight: "0",
    },
  },
});
