import React from 'react';
import 'typeface-roboto';
import Menu from "./components/Menu";
import DataStory from "./components/DataStory";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import lightGreen from '@material-ui/core/colors/lightGreen';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: lightGreen,
    },
});

function App() {
  return (
    <>
        <MuiThemeProvider theme={theme}>
            <Menu/>
            <DataStory/>
        </MuiThemeProvider>
    </>
  );
}

export default App;
