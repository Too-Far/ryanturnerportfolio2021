import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles({
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
    backgroundColor: "	#D3D3D3",
    marginTop: "-1em",
    position: "absolute",
    top: "50%",
    width: "50%",
    left: "25%",
    textAlign: "center",
    borderRadius: "10px",
  },
  modalWrapper: {
    textAlign: "center",
  },
});
