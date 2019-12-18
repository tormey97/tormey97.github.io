import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import useStyles from "../styles/main"
import Link from "@material-ui/core/Link/Link";
import Button from "@material-ui/core/Button/Button";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";

const scrollToRef = (ref) => {
    console.log(ref);
    if (ref === undefined || ref.current === null || ref.current === undefined) {return}
    window.scrollTo(0, ref.current.offsetTop)
};

function TabPanel({value, currentIndex, children}) {
    const classes = useStyles();
    return (
        <div className={classes.tabSection} style={{display: value === currentIndex ? "block" : "none"}}>
            {children}
        </div>
    )
}

function Source({children, sourcesRef}) {
    return (
            <Link style={{cursor: "pointer"}} onClick={() => {scrollToRef(sourcesRef)}}>
                {children}
            </Link>
    )
}

function DataStory() {
    const classes = useStyles();
    const [selectedDiet, setSelectedDiet] = React.useState(0);

    const sourcesRef = React.useRef(null);
    const executeScroll = () => scrollToRef(sourcesRef);

    const changeDiet = (event, value) => {
        console.log(value);

        setSelectedDiet(value)
    };

    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.headerSection}>
                <Typography variant={"h4"}>
                    How we eat
                </Typography>
            </div>
            <div className={classes.section}>
                <Typography variant={"h5"}>
                    Introduction
                </Typography>
                <Divider/>

                <Typography className={classes.mainText}>
                    <p>One of the most important aspects of human life is the food we eat on a daily basis. The dietary choices we make have a significant impact on our health and well-being. (...) However, many people have certain restrictions imposed on
                    their diets, whether self-imposed as in the case of a vegan, or as a result of conditions like lactose intolerance, that necessitate changes in their diets. An interesting research question is then: how do these dietary restrictions change the way people eat in unexpected ways?</p>

                    <p>
                        To answer this question, we've made use of a dataset consisting of a large amount of recipes and analyzed the ingredients in each recipe.
                    </p>

                    <p>The following plot shows how the worldwide consumption of food adheres to the classical food pyramid:</p>
                </Typography>
                {/* TODO the food pyramid is not relevant to this data story?*/}
                <iframe width={1000} height={500} frameBorder={0} src={"./foodpyramid.html"}/>

                <Typography className={classes.mainText}>
                    <p>As we can see, there are some deviations from the recommended quantities, especially </p>
                </Typography>
                {/*<iframe width={1000} height={500} frameBorder={0} src={"./healthinessPerDiet.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./heatMapOfTop10Ingredients.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./recipesPerDiet.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./scatterPlotIngredients.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./top10Ingredients.html"}/>*/}
            </div>

            <div className={classes.section}>
                <Typography variant={"h5"}>
                    Dietary restrictions
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <p>There are many common diets that people adhere to. We have chosen seven of them in order to make our analysis more comprehensive and feasible.
                        Out of the seven we have chosen, three are dietary restrictions - that is, a diet that excludes certain ingredients, such as veganism. The remaining four are dietary recommendations for people who may lack a certain nutrient, e.g. iron.</p>
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
                    <Typography variant={"h5"}>
                        Vegan diet
                    </Typography>
                    <Divider/>
                    <Typography className={classes.mainText}>
                        <p>
                            Vegan is a diet in which the consumer does not eat any kind of food related to animals.
                            Neither their meat nor their indirect products like milk (and related), eggs or honey.
                        </p>
                        TODO PLOT 1
                        <p>
                            In this plot we can see, at the same time, the number of recipes reductio due to the diet,
                            as well as the change in the percentage of healthy recipes. The number of recipes is reduced
                            a 80%, with a final ammount of 545.587 recipes. This shows us how much we base our diet in
                            non-vegan products. 4 out of 5 of the recipes out there contain animal related products.
                            We can see that the pecentage of unhealthy recipes decreases from 68.99% to 52.89%, making
                            vegan the easiest diet to be healthy. This is mainly caused by the absent of butter and
                            other animal unhelathy products like bacon<Source sourcesRef={sourcesRef}>[6]</Source>.
                        </p>
                        TODO PLOT 2
                        <p>
                            This plot shows the average number of ingredients per recipe in the vegan diet and the regular
                            one. There is a reduction in the gluten free diet of 1.7 ingredients per recipe. This is a
                            really high reduction caused mainly by the lack of bakery due to the lack of egg, butter and
                            milk consumption. However, it is still a surprisingly high value. Beeing vegan is less
                            complex than it looks in terms of number of ingredients per recipe.
                        </p>

                        <Typography variant={"h5"}>
                            Changes in ingredients
                        </Typography>
                        <Divider/>

                        <Typography className={classes.mainText}>
                            <p>
                                When comparing the gluten free diet with the regular one, we can see that on average,
                                ingredients vary their rate of appearances in recipes a 80%. This is a huge value, let's see
                                the most important ingredients that change their rate of appearances. Remember that the
                                ingredients not vegan such as eggs are not taken into account (its consumption is reduced
                                completely)
                            </p>
                            <p>
                                <b>Increase of ingredients</b>: Olive oil, cilantro, vegetables (in general), chickpeas, tofu, lentils.
                                All of the ingredients that increase their appearances are really healthy and do not suppose
                                any issue for the consumer. Therefore, no need to be concerned. Actually the increase of
                                products like chickepeas, tofu or lentils is good for a vegan as are the richest products
                                in protein in a vegan diet<Source sourcesRef={sourcesRef}> [7]</Source>.
                            </p>
                            <p>
                                <b>Decrease of ingredients</b>: Salt, sugar, flour, pasta, bread, noodles.
                                Apparently, there is no problem with these decreases. Actually it is good to reduce the
                                consumption of sugar and salt[3]. However, some of the ingredients that decrease are rich
                                in carbohydrates[8]: Flour (from 23.5% to 7.6%), pasta (from 3.6% to 1.5%), bread
                                (from 2.8% to 1.3%) and noodles (from 0.7% to 0.2%). If you are eating a vegan diet,
                                make sure you eat products rich in carbohydrates too. It is more common to be concern about
                                the lack of protein, but the lack of carbohydrates is also present but can be avoided by
                                eating more pasta, brown rice[9], vegan bread...
                                </p>
                        </Typography>
                    </Typography>
                </TabPanel>
                <TabPanel value={1} currentIndex={selectedDiet}>
                    <Typography variant={"h5"}>
                        Gluten free diet
                    </Typography>
                    <Divider/>
                    <Typography className={classes.mainText}>
                        <p>
                            Gluten intolerance people or with celiac disease(from now on only gluten intolerance) are not
                            able to eat a protein primarily found in wheat, barley and rye
                            <Source sourcesRef={sourcesRef}>[5]</Source>. People with this intolerance
                            do not consume any product with any of these ingredient on it. We know there are good substitutes
                            for gluten, however, the truth is that consumers rarely use these products, but they mainly stop
                            eating the ones they cannot eat. Now we will present the conclusions drawn from the analysis
                            of how a gluten free diet changes indirectly the way we eat by analyzing the recipes
                            available for this diet.
                        </p>
                            TODO PLOT 1
                        <p>
                            In this plot we can see, at the same time, the number of recipes reduction due to the diet,
                            as well as the change in the percentage of healthy recipes. The number of recipes is reduced
                            a 30%, with a final amount of 545.587 recipes. This shows us how much we base our diet in
                            gluten. Almost 1/3 of the recipes contain gluten. We can see that the percentage of unhealthy
                            recipes decreases from 68.99% to 61.76%, making it easier for gluten intolerance people to
                            eat healthy. This is mainly caused by the absent of desserts in the diet, which are mainly
                            made by gluten products.
                        </p>
                            TODO PLOT 2
                        <p>
                            This plot shows the average number of ingredients per recipe in the gluten free diet and the
                            regular one. There is a reduction in the gluten free diet of 0.5 ingredients per recipe.
                            This is again caused by the absence of desserts in the diet, meals that contain a high number
                            of ingredients.
                        </p>
                    </Typography>
                    <Typography variant={"h5"}>
                        Changes in ingredients
                    </Typography>
                    <Divider/>

                    <Typography className={classes.mainText}>
                        When comparing the gluten free diet with the regular one, we can see that on average,
                        ingredients vary their rate of appearances in recipes a 20%. This is a normal value, let's see
                        now the most important ingredients that change their rate of appearances. Remember that the
                        ingredients containing gluten such as flour are not taken into account (its consumption is
                        reduced completely)
                        <p>
                            <b>Increase of ingredients</b>: Pepper, garlic, olive oil, onion, tomatoes and vinegar.
                            All of the ingredients that increase their appearances are really healthy and do not suppose
                            any issue for the consumer. Therefore, no need to be concerned.
                        </p>
                        <p>
                            <b>Decrease of ingredients</b>: Salt, sugar, butter, egg, milk, and oat.
                            Apparently, there is no problem with these decreases. Actually is good to reduce the
                            consumption of sugar, butter and salt<Source sourcesRef={sourcesRef}>[3]</Source>. However, some of the ingredients that decrease
                            are rich in protein and B12 vitamin<Source sourcesRef={sourcesRef}>[4]</Source>: Egg (from 27% to 14%), milk (from 14% to 8%), and
                            oat (from 2% to 1%). If you are eating a gluten free diet, make sure you look for diets with
                            eggs and milk on it.
                        </p>
                    </Typography>
                </TabPanel>
                <TabPanel value={2} currentIndex={selectedDiet}>
                    <Typography variant={"h5"}>
                        Lactose free diet
                    </Typography>
                    <Divider/>
                    <Typography className={classes.mainText}>
                        <p>
                            Lactose intolerance is the inability to break down a type of natural sugar called lactose.
                            People with this diet do not consume any product that contains lactose.
                            The most common are milk, butter and milk, but all of their derivatives are also inedible for them.
                            Now we will present the conclusions drawn from the analysis of how a lactose
                            free diet changes indirectly the way we eat by analyzing the recipes available for this diet.
                        </p>
                        <iframe width={900} height={550} frameBorder={0} src={"./lactoseFreeHealthyness.html"}/>
                        <p>
                            In this plot we can see, at the same time, the number of recipes reduction due to the diet,
                            as well as the change in the percentage of healthy recipes. The number of recipes is reduced
                            a 56.2%, with a final amount of 341.240 recipes. This shows us how much we base our diet in
                            diary, with nearly half of our diets containing it. We can see that the percentage of
                            unhealthy recipes decreases from 68.99% to 54.81%, making it easier for lactose intolerance
                            people to eat healthy. This is mainly caused by the absent of butter in the diet, which as
                            we have seen above is a really dominant ingredient.
                        </p>
                        <p>
                            This plot shows the average number of ingredients per recipe in the lactose free diet and
                            the regular one. There is a slight reduction in the lactose free diet of 0.3 ingredients per
                            recipe. Nothing really remarkable.
                        </p>

                    </Typography>
                    <Typography variant={"h5"}>
                        Changes in ingredients
                    </Typography>
                    <Divider/>

                    <Typography className={classes.mainText}>
                        <p>
                            <b>Increase of ingredients</b>: Olive oil, vegetable oil, soy sauce, fish sauce, hoisin sauce, mirin <br/>
                            The most concerning ingredient here is the vegetable oil (from 11% to 16%). It is considered
                            as a great source of omega 6 which several investigations have related to cancer issues<Source sourcesRef={sourcesRef}>[1]</Source>.
                            However, the olive oil also increases in the lactose free diet (from 19% to 24.5%). Olive oil
                            differs from vegetable oil in that its nutritional value is more complete and resistant to high
                            cooking temperatures <Source sourcesRef={sourcesRef}>[2]</Source>. Therefore, if we are lactose intolerance we can avoid these increase
                            in vegetable oil by replacing it with olive oil. The rest of the ingredients that increase in
                            appearances, are mainly sauces. Which is not a problem itself, but if this sauces are bought
                            already made, they can have huge amount of unhealthy ingredients and other components.
                        </p>
                        <p>
                            <b>Decrease of ingredients</b>: Sugar, egg, flour, chocolate, oreo cookies, graham crackers.
                            The ingredients decreasing are positive due to their unhealthiness, which make sense when
                            seeing the healthy/unhealthy plot above. The big majority of ingredients that decrease their
                            appearances with lactose free diets are those related to deserts. This is good, most of the
                            deserts we eat are unhealthy (especially those with oreo cookies or graham crackers). Make
                            sure when you make your lactose free cakes and cookies to lower the amount of sugar you put.
                        </p>
                    </Typography>
                </TabPanel>
                <TabPanel value={3} currentIndex={selectedDiet}>
                    Iron deficiency
                </TabPanel>
                <TabPanel value={4} currentIndex={selectedDiet}>
                    Salmon
                </TabPanel>

            </div>

            <div className={classes.section}>
                <Typography variant={"h5"}>
                    Conclusion
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies interdum ex at efficitur. Ut vitae ante in ipsum consectetur gravida eget vitae sapien. Quisque semper suscipit mi quis volutpat. Donec ligula sem, semper sit amet est eu, tempor faucibus ex. Phasellus lacinia venenatis nunc id volutpat. Fusce quis lacus ut risus semper consectetur eu ac nulla. Suspendisse bibendum dui libero, vitae cursus tellus pharetra ut.
                        Curabitur at laoreet eros. Sed facilisis eget orci vel bibendum. Praesent urna sem, sollicitudin luctus luctus non, pharetra a erat. Nullam in velit id neque pretium fringilla. Etiam sodales hendrerit sodales. Phasellus sagittis elit id enim scelerisque, quis sollicitudin metus finibus. In hac habitasse platea dictumst. Praesent in neque euismod, suscipit enim nec, dapibus neque. Nullam varius, tellus non imperdiet gravida, orci metus varius sem, sed interdum mauris lorem sed dui. Integer nec nisl accumsan, auctor nisi vel, ultricies nisl.</p>
                </Typography>
                {/*<iframe width={1000} height={500} frameBorder={0} src={"./gant2.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./spainPyramid.html"}/>
                <iframe width={1000} height={500} frameBorder={0} src={"./UKPyramid.html"}/>*/}
            </div>

            <div className={classes.section} ref={sourcesRef}>
                <Typography variant={"h5"}>
                    Sources
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <List>
                        <ListItem>[1] Guyent, S.J., Carlson, S. E., Evolutionary aspects of diet, the omega-6/omega-3 ratio and genetic variation: nutritional implications for chronic diseases.</ListItem>
                        <ListItem>[2] Redondo-Cuevas, L., Castellano, G, Revealing the Relationship Between Vegtable Oil Consumption and  Oxidative Stability: A Multifactorial Approach</ListItem>
                        <ListItem>[3] DiNicolantonio, J.J, Lucan, S.C., The Wrong White Crystals: Not Salt But Sugar As Aetiological in Hypertension and CardioMetabolic Disease</ListItem>
                        <ListItem>[4] <Link href={"https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"}>https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/</Link></ListItem>
                        <ListItem>[5] <Link href={"https://www.aaaai.org/conditions-and-treatments/conditions-dictionary/gluten-intolerance"}>https://www.aaaai.org/conditions-and-treatments/conditions-dictionary/gluten-intolerance</Link></ListItem>
                        <ListItem>[6] <Link href={"https://www.cancercouncil.com.au/1in3cancers/lifestyle-choices-and-cancer/red-meat-processed-meat-and-cancer/"}>https://www.cancercouncil.com.au/1in3cancers/lifestyle-choices-and-cancer/red-meat-processed-meat-and-cancer/</Link></ListItem>
                        <ListItem>[7] <Link href={"https://www.nutritionvalue.org/Chickpeas_%28garbanzo_beans%2C_bengal_gram%29%2C_raw%2C_mature_seeds_nutritional_value.html"}>https://www.nutritionvalue.org/Chickpeas_%28garbanzo_beans%2C_bengal_gram%29%2C_raw%2C_mature_seeds_nutritional_value.html</Link></ListItem>
                        <ListItem>[8] <Link href={"https://www.verywellfit.com/flour-nutrition-facts-calories-and-health-benefits-4119166"}>https://www.verywellfit.com/flour-nutrition-facts-calories-and-health-benefits-4119166</Link></ListItem>
                        <ListItem>[9] <Link href={"https://nutritiondata.self.com/facts/cereal-grains-and-pasta/5720/2"}>https://nutritiondata.self.com/facts/cereal-grains-and-pasta/5720/2</Link></ListItem>
                    </List>
                </Typography>
            </div>
        </div>
    );
}

export default DataStory;
