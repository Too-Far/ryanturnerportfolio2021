import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "black",
    display: "flex",
    position: "fixed",
    flexDirection: "row",
    width: "100%",
    zIndex: "10",
  },
  socials: {
    display: "inline-block",
    width: "95%",
    textAlign: "right",
    paddingRight: "4em",
  },
  paper: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  logo: {
    height: "50px",
  },
  icon: {
    "&:hover": {
      color: "white",
      curser: "pointer",
    },
  },
});
