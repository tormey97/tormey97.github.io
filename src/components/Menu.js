import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;
