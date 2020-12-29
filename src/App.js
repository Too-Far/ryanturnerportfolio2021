import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./muiTheme";
import { useStyles } from "./appStyle";
import Home from "./Pages/Home";
import About from "./components/About";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.appWrapper}>
        <div className={classes.left}>
          <div className={classes.spine} />
        </div>
        <div className={classes.right}>
          {/*! Components go Here: */}
          <Home />
          <About />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
