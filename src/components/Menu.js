import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    toolbar: {
        padding: "0 0 0 15%",
    },
    link: {
        textDecoration: "none",
        textColor: "#FFF",
    },

    linkButton: {
        color: "#FFF"
    }
}));

function Menu() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Link className={classes.link} to={process.env.PUBLIC_URL + "/"}><Button className={classes.linkButton}>Data story</Button></Link>
                <Link className={classes.link} to={process.env.PUBLIC_URL + "/"}><Button className={classes.linkButton}>OpenFoodFacts data story</Button></Link>
                <Link className={classes.link} to={process.env.PUBLIC_URL + "/search"}><Button className={classes.linkButton}>Ingredient search</Button></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;
