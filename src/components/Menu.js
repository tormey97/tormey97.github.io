import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    toolbar: {
        height: "2px"
    }
}));

function Menu() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Link to={"/"}>adsadssa</Link>
                <Link to={"/search"}>adshf</Link>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;
