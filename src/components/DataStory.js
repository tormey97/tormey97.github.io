import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => {
    console.log(theme);
    return ({
    section: {
        padding: "0 50px 0 50px"
    },
    headerSection: {
        height: 200,
        textAlign: "center",
        padding: "50px 0 0 0"
    },

    toolbar: theme.mixins.toolbar,
})});

function DataStory() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.headerSection}>
                <Typography variant={"h4"}>
                    Title of Data Story
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography>
                    <p>Text text text text textText text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text textText text text text textText text text text textText text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text textText text text text textText text text text textText text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text textText text text text textText text text text textText text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text textText text text text textText text text text textText text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text textText text text text textText text text text textText text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text text
                        Text text text text textText text text text text</p>
                </Typography>

            </div>
        </div>
    );
}

export default DataStory;
