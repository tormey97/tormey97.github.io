import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import useStyles from "../styles/main"

function TabPanel({value, currentIndex, children}) {
    const classes = useStyles();
    return (
        <div className={classes.tabSection} style={{display: value === currentIndex ? "block" : "none"}}>
            {children}
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
                    <p>haha look at my shitty graph</p>
                </Typography>

                <iframe width={1000} height={500} frameBorder={0} src={"./foodpyramid.html"}/>


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
                <iframe width={1000} height={500} src={"./gant1.html"}/>
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
                        variant={"scrollable"}
                        scrollButtons={"auto"}
                        centered>
                        <Tab index label={"Vegan"}/>
                        <Tab label={"Gluten free"}/>
                        <Tab label={"Lactose free"}/>
                        <Tab label={"Iron deficiency"}/>
                        <Tab label={"Omega 3 deficiency"}/>
                        <Tab label={"Spicy"}/>
                        <Tab label={"High in magnesium"}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={0} currentIndex={selectedDiet}>
                    <Typography variant={"h4"}>
                        Vegan diet
                    </Typography>
                    <Divider/>

                    <Typography className={classes.mainText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies interdum ex at efficitur. Ut vitae ante in ipsum consectetur gravida eget vitae sapien. Quisque semper suscipit mi quis volutpat. Donec ligula sem, semper sit amet est eu, tempor faucibus ex. Phasellus lacinia venenatis nunc id volutpat. Fusce quis lacus ut risus semper consectetur eu ac nulla. Suspendisse bibendum dui libero, vitae cursus tellus pharetra ut.
                            Curabitur at laoreet eros. Sed facilisis eget orci vel bibendum. Praesent urna sem, sollicitudin luctus luctus non, pharetra a erat. Nullam in velit id neque pretium fringilla. Etiam sodales hendrerit sodales. Phasellus sagittis elit id enim scelerisque, quis sollicitudin metus finibus. In hac habitasse platea dictumst. Praesent in neque euismod, suscipit enim nec, dapibus neque. Nullam varius, tellus non imperdiet gravida, orci metus varius sem, sed interdum mauris lorem sed dui. Integer nec nisl accumsan, auctor nisi vel, ultricies nisl.</p>
                    </Typography>
                </TabPanel>
                <TabPanel value={1} currentIndex={selectedDiet}>

                    This is the ... gluten free diet?
                </TabPanel>
                <TabPanel value={2} currentIndex={selectedDiet}>
                    <div style={{float: "right"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies interdum ex at efficitur. Ut vitae ante in ipsum consectetur gravida eget vitae sapien. Quisque semper suscipit mi quis volutpat. Donec ligula sem, semper sit amet est eu, tempor faucibus ex. Phasellus lacinia venenatis nunc id volutpat. Fusce quis lacus ut risus semper consectetur eu ac nulla. Suspendisse bibendum dui libero, vitae cursus tellus pharetra ut.
                        Curabitur at laoreet eros. Sed facilisis eget orci vel bibendum. Praesent urna sem, sollicitudin luctus luctus non, pharet</div>
                    <iframe width={600} height={550} frameBorder={0} src={"./lactoseFreeHealthyness.html"}/>
                </TabPanel>
                <TabPanel value={3} currentIndex={selectedDiet}>
                    Iron deficiency
                </TabPanel>
                <TabPanel value={4} currentIndex={selectedDiet}>
                    Salmon
                </TabPanel>

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
                <iframe width={1000} height={500} frameBorder={0} src={"./gant2.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./spainPyramid.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./UKPyramid.html"}/>
            </div>
        </div>
    );
}

export default DataStory;
