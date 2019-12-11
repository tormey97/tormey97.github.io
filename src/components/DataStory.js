import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import classNames from "classnames"

const useStyles = makeStyles(theme => {
    console.log(theme);
    return ({
    section: {
        padding: "0 15% 0 15%",
        marginTop: 40
    },
    headerSection: {
        height: 200,
        textAlign: "center",
        backgroundColor: theme.palette.primary.dark,
        color: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    mainText: {
        fontSize: "20px"
    },
    tabPanel: {
        height: 100
    },
    footer: {
        backgroundColor: "#999",
        height: 100,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    toolbar: theme.mixins.toolbar,
})});

function TabPanel({value, currentIndex}) {
    const classes = useStyles();
    return (
        <div className={classes.tabPanel} style={{display: value === currentIndex}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ult Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ult Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ult {value}
        </div>
    )
}

function DataStory() {
    const classes = useStyles();
    const [selectedDiet, setSelectedDiet] = React.useState(0);

    const changeDiet = (event, value) => {
        console.log(value);
        setSelectedDiet(value)
    };

    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.headerSection}>
                <Typography variant={"h2"}>
                    TITLE OF THE PROJECT
                </Typography>
            </div>
            <div className={classes.section}>
                <Typography variant={"h4"}>
                    Introduction
                </Typography>
                <Divider/>

                <Typography className={classes.mainText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies interdum ex at efficitur. Ut vitae ante in ipsum consectetur gravida eget vitae sapien. Quisque semper suscipit mi quis volutpat. Donec ligula sem, semper sit amet est eu, tempor faucibus ex. Phasellus lacinia venenatis nunc id volutpat. Fusce quis lacus ut risus semper consectetur eu ac nulla. Suspendisse bibendum dui libero, vitae cursus tellus pharetra ut.
                        Curabitur at laoreet eros. Sed facilisis eget orci vel bibendum. Praesent urna sem, sollicitudin luctus luctus non, pharetra a erat. Nullam in velit id neque pretium fringilla. Etiam sodales hendrerit sodales. Phasellus sagittis elit id enim scelerisque, quis sollicitudin metus finibus. In hac habitasse platea dictumst. Praesent in neque euismod, suscipit enim nec, dapibus neque. Nullam varius, tellus non imperdiet gravida, orci metus varius sem, sed interdum mauris lorem sed dui. Integer nec nisl accumsan, auctor nisi vel, ultricies nisl.</p>
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography variant={"h4"}>
                    Second section
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies interdum ex at efficitur. Ut vitae ante in ipsum consectetur gravida eget vitae sapien. Quisque semper suscipit mi quis volutpat. Donec ligula sem, semper sit amet est eu, tempor faucibus ex. Phasellus lacinia venenatis nunc id volutpat. Fusce quis lacus ut risus semper consectetur eu ac nulla. Suspendisse bibendum dui libero, vitae cursus tellus pharetra ut.
                        Curabitur at laoreet eros. Sed facilisis eget orci vel bibendum. Praesent urna sem, sollicitudin luctus luctus non, pharetra a erat. Nullam in velit id neque pretium fringilla. Etiam sodales hendrerit sodales. Phasellus sagittis elit id enim scelerisque, quis sollicitudin metus finibus. In hac habitasse platea dictumst. Praesent in neque euismod, suscipit enim nec, dapibus neque. Nullam varius, tellus non imperdiet gravida, orci metus varius sem, sed interdum mauris lorem sed dui. Integer nec nisl accumsan, auctor nisi vel, ultricies nisl.</p>
                </Typography>
            </div>

            <div className={classes.section}>
                <Typography variant={"h4"}>
                    Diet analysis
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <p>
                        In this section, we present analysis of a bunch of different diets. Change which diet you want
                        to look at by selecting hte appropriate tab.
                    </p>
                </Typography>
                <AppBar position={"static"} color={"default"}>
                    <Tabs
                        value={selectedDiet}
                        onChange={changeDiet}
                        variant={"fullwidth"}>
                        <Tab index label={"Vegan"}/>
                        <Tab label={"Gluten free"}/>
                        <Tab label={"Lactose free"}/>
                        <Tab label={"Iron deficiency"}/>
                        <Tab label={"Omega 3 deficiency"}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={selectedDiet}/>
            </div>

            <div className={classes.section}>
                <Typography variant={"h4"}>
                    Another section
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies interdum ex at efficitur. Ut vitae ante in ipsum consectetur gravida eget vitae sapien. Quisque semper suscipit mi quis volutpat. Donec ligula sem, semper sit amet est eu, tempor faucibus ex. Phasellus lacinia venenatis nunc id volutpat. Fusce quis lacus ut risus semper consectetur eu ac nulla. Suspendisse bibendum dui libero, vitae cursus tellus pharetra ut.
                        Curabitur at laoreet eros. Sed facilisis eget orci vel bibendum. Praesent urna sem, sollicitudin luctus luctus non, pharetra a erat. Nullam in velit id neque pretium fringilla. Etiam sodales hendrerit sodales. Phasellus sagittis elit id enim scelerisque, quis sollicitudin metus finibus. In hac habitasse platea dictumst. Praesent in neque euismod, suscipit enim nec, dapibus neque. Nullam varius, tellus non imperdiet gravida, orci metus varius sem, sed interdum mauris lorem sed dui. Integer nec nisl accumsan, auctor nisi vel, ultricies nisl.</p>
                </Typography>
            </div>

            <div className={classNames(classes.section, classes.footer)}>
            </div>

        </div>
    );
}

export default DataStory;
