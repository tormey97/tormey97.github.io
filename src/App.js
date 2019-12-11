import React from 'react';
import 'typeface-roboto';
import Menu from "./components/Menu";
import DataStory from "./components/DataStory";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import lightGreen from '@material-ui/core/colors/lightGreen';
import green from '@material-ui/core/colors/green';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from "./components/Search";

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: lightGreen,
    },
});

function App() {
  return (
    <Router>
        <MuiThemeProvider theme={theme}>
            <Menu/>
            <Switch>
                <Route path={"/search"}>
                    <Search/>
                </Route>
                <Route path={"/"}>
                    <DataStory/>
                </Route>
            </Switch>
        </MuiThemeProvider>
    </Router>
  );
}

export default App;
