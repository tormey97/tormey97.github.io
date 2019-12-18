import React from 'react';
import 'typeface-roboto';
import Menu from "./components/Menu";
import DataStory from "./components/DataStory";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import useStyles from "./styles/main"
import secondaryColor from '@material-ui/core/colors/green';
import primaryColor from '@material-ui/core/colors/indigo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Search from "./components/Search";
import classNames from "classnames";
import Divider from "@material-ui/core/Divider/Divider";

const theme = createMuiTheme({
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
    },
});

function App() {
    const classes = useStyles();
    return (
    <Router>
        <MuiThemeProvider theme={theme}>
            <Menu/>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/search"}>
                    <Search/>
                </Route>
                <Route path={process.env.PUBLIC_URL + "/"}>
                    <DataStory/>
                </Route>
            </Switch>
            <Divider/>
            <div className={classNames(classes.section, classes.footer)}>
            </div>
        </MuiThemeProvider>
    </Router>
    );
}

export default App;
