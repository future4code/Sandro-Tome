import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e53935",
      contrastText: 'white'
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default theme
