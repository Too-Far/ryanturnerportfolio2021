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
    "@media (max-width:600px)": {
      display: "inline",
    },
  },
  paper: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    marginTop: "1em",
    marginBottom: "-1.5em",
    height: "50px",
    "@media (max-width:600px)": {
      visibility: "hidden",
      height: "0px",
    },
  },
  icon: {
    "&:hover": {
      color: "black",
      curser: "pointer",
    },
  },
});
