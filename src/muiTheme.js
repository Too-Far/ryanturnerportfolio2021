import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#582ae9",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: `"Roboto Mono", monotype`,
  },
});

theme.typography.h2 = {
  fontSize: "4rem",
  "@media (max-width:600px)": {
    fontSize: "3rem",
  },
};
theme.typography.h3 = {
  fontSize: "3rem",
  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
};
