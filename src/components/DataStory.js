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

function VeganSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
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
                        in carbohydrates<Source sourcesRef={sourcesRef}>[8]</Source>: Flour (from 23.5% to 7.6%), pasta (from 3.6% to 1.5%), bread
                        (from 2.8% to 1.3%) and noodles (from 0.7% to 0.2%). If you are eating a vegan diet,
                        make sure you eat products rich in carbohydrates too. It is more common to be concern about
                        the lack of protein, but the lack of carbohydrates is also present but can be avoided by
                        eating more pasta, brown rice<Source sourcesRef={sourcesRef}>[9]</Source>, vegan bread...
                    </p>
                </Typography>
            </Typography>
        </>
    )
}

function VegetarianSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
            <Typography variant={"h5"}>
            Vegetarian diet
            </Typography>
            <Divider/>
            <Typography className={classes.mainText}>
                <p>
                    Vegetarianism is a diet in which the consumer does not eat any kind of meat. Neither beef,
                    chicken, fish... Vegetarian people do eat egg, milk and other products that are produced by
                    animals.
                </p>
                TODO -- PLOT 1 --
                <p>
                    In this plot we can see, at the same time, the number of recipes reduction due to the diet,
                    as well as the change in the percentage of healthy recipes. The number of recipes is reduced
                    a 37%, with a final amount of 496.426 recipes. This shows us how much we base our diet in
                    meat, having almost half of the recipes out there containing meat of any kind. We can also
                    see that the percentage of unhealthy recipes increases from 68.99% to 73.47%, making
                    vegetarian the only diet of the studied ones which makes consumers harder to be healthier.
                </p>
                TODO -- PLOT 2 --
                <p>
                    This plot shows the average number of ingredients per recipe in the vegetarian diet and the
                    regular one. There is a reduction in the vegetarian free diet of 0.8 ingredients per recipe.
                    This is a considerably high reduction making vegetarian meals less complex in terms of number
                    of ingredients on them.
                </p>


                <Typography variant={"h5"}>
                    Changes in ingredients
                </Typography>
                <Divider/>
                <p>
                    When comparing the vegetarian diet with the regular one, we can see that on average,
                    ingredients vary their rate of appearances in recipes a 28%. This is a relatively high value
                    so let's see the most important ingredients that change their rate of appearances. Remember
                    that the ingredients not vegetarian such as beef are not taken into account (its consumption
                    is reduced completely)
                </p>
                <p>
                    <b>Increase of ingredients</b>: Sugar, butter, eggs, milk, chocolate and baking powder.
                    This ingredients explain why the vegetarian diet is more related to unhealthy recipes,
                    as sugar (from 34% to 46%), butter (from 29% to 33%) and chocolate (from 4% to 6.5%) are
                    increased<Source sourcesRef={sourcesRef}> [3]</Source>. The other ingredients are good news.
                    As vegetarian stop eating animal meat, they loose a great source of vitamin B12
                    <Source sourcesRef={sourcesRef}>[10]</Source> and protein. Increasing the consumption of
                    eggs (from 27% to 33.5%), milk (from 14% to 17%) and cheese (not applicable) is a good way
                    to fight this lack of B12 and protein.
                </p>
                <p>
                    <b>Decrease of ingredients</b>: Salt, cheese, olive oil, tomatoes, mushrooms, sauces.
                    The reduction of salt (from 53% to 49.5%) is always something good <Source sourcesRef={sourcesRef}>[11]</Source>, as is the reduction os sauces, which on theory are not unhealthy, but when bought pre-made, they are. Nevertheless, the rest of the reductions are not good. As said in the ingredients increasing analysis, cheese is a great source of vitamin B12 and protein for vegetarian. Thus, its reduction is not welcomed. Olive oil, tomatoes and mushrooms, are healthy ingredients which reduction is never something good, eventhough they can be replaced.
                </p>
            </Typography>
        </>
    )
}

function LactoseFreeSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}

function GlutenFreeSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}

function IronDeficitSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
            <Typography variant={"h5"}>
                Iron deficiency
            </Typography>
            <Divider/>
            <Typography className={classes.mainText}>
                <p>
                    Iron lack is a problem that causes abnormally low levels of red blood cells. The way
                    countering this can be with pills given by the doctor, however, when the level of iron is
                    not extremely low, the way out is changing the diet into a iron rich one. Products rich in
                    iron are for example: Tofu, soy, olives, beef, shellfish... <Source sourcesRef={sourcesRef}>[12, 13]</Source>
                </p>
                -- PlOT 1 --
                <p>
                    In this plot we can see, at the same time, the number of recipes reduction due to the diet,
                    as well as the change in the percentage of healthy recipes. The number of recipes is reduced
                    a 57%, with a final amount of 496.426 recipes. This shows that actually eating good amount
                    of iron is not hard to do. We can also see that the percentage of unhealthy recipes increases
                    from 68.99% to 61.43%, making iron rich diet consumers easier to be healthy.
                </p>
                -- PLOT 2 --
                <p>
                    This plot shows the average number of ingredients per recipe in the iron rich diet and the
                    regular one. There is an increase in the iron rich free diet of 1.4 ingredients per recipe.
                    This is a really high increase making iron rich meals much more complex in terms of number
                    of ingredients on them.
                </p>

                <Typography variant={"h5"}>
                    Changes in ingredients
                </Typography>
                <Divider/>
                <p>
                    When comparing the iron rich diet with the regular one, we can see that on average,
                    ingredients vary their rate of appearances in recipes a 30%. This is a relatively high value
                    so let's see the most important ingredients that change their rate of appearances. Remember
                    that the ingredients rich in iron such as beef are not taken into account as they will
                    obviously increase, we are looking for indirect increases and decreases.
                </p>
                <p>
                    <b>Increase of ingredients</b>: Salt, olive oil, garlic, oregano, celery and bay leaf.
                    The only problem with this increases is the salt (from 53% to 60%), as reducing its consumption
                    is highly recomended<Source sourcesRef={sourcesRef}>[11]</Source>. The rest of the ingredients are perfeclty healthy and their increase
                    of consumption do not cause any kind issue. Only mention the curious fact that some of the
                    ingredients that are incremented in terms of the number of appearances, are spicies: oregano
                    (from 4% to 6%), garlic (from 27% to 39%), celery (from 5.5% to 9%) and bay leaf (from 2.5% to 5%).
                </p>
                <p>
                    <b>Decrease of ingredients</b>: Sugar, butter, flour, egg, milk, friuts.
                    The reduction of sugar<Source sourcesRef={sourcesRef}>[3]</Source> (from 34.5% to 22%) and butter (from 29% to 26%) explain why in the
                    above graph, we could see that iron rich diets where less unhealthy in general. The reduction
                    of the consumption egg (from 27% to 21.5%) and milk (from 14% to 11.5%) is not a problem
                    itself, however we will have to eat other products to counter this lack of protein and B12
                    vitamin <Source sourcesRef={sourcesRef}>[10]</Source>. The last think, but not less interesting, is that the consumption of fruits is
                    drastically reduced: Banana (from 2% to 1%), pineapple (from 2% to 1%), strawberries
                    (from 1.5% to 0.5%), cherries (from 1% to 0.5%)... This will not be a problem if you just eat
                    friut as dessert.
                </p>
            </Typography>
        </>
    )
}

function Omega3DeficitSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
            <Typography variant={"h5"}>
                Omega 3 deficiency
            </Typography>
            <Divider/>
            <Typography className={classes.mainText}>
                <p>Omega 3 lack is a problem that an unbalance of the omega 3 to omega 6 ration (1:1 is recomended)
                    that leads into several health problems such as cancer.<Source sourcesRef={sourcesRef}> [1]</Source>. The way countering this can be
                    atchieved changing into a diet rich in omega 3. Products rich in omega 3 are for example:
                    Salmon, oyster, beans, avocado, soy... <Source sourcesRef={sourcesRef}>[17, 18]</Source>
                </p>
                -- PlOT 1 --
                <p>
                    In this plot we can see, at the same time, the number of recipes reduction due to the diet,
                    as well as the change in the percentage of healthy recipes. The number of recipes is reduced a
                    88%, with a final ammount of 88.072 recipes. This shows us how hard is to follow diets rich in
                    omega 3. This, and the fact that the consumption of omega 6 has risen the last past years<Source sourcesRef={sourcesRef}>[19]</Source>,
                    makes . We can also see that the pecentage of unhealthy recipes increases from 68.99% to 60.92%,
                    making omega 3 rich diet consumers easier to be healthy.
                </p>
                -- PLOT 2 --
                <p>
                    This plot shows the average number of ingredients per recipe in the iron rich diet and the
                    regular one. There is an increase in the iron rich free diet of 1,7 ingredients per recipe.
                    This is a really high increase, making omega 3 rich meals more complex in terms of number of
                    ingredients on them.
                </p>
                <Typography variant={"h5"}>
                    Changes in ingredients
                </Typography>
                <Divider/>
                <p>
                    When comparing the omega 3 rich diet with the regular one, we can see that on average,
                    ingredients vary their rate of appearances in recipes a 32%. This is a high value, so let's
                    see the most important ingredients that change their rate of appearances. Remember that the
                    ingredients rich in omega 3 such as salmon are not taken into account as they will abviously
                    increase. We are looking for indirect increases and decreases.
                </p>

                <p>
                    Increase of ingredients: Salt, garlic, vegetable oil, olive oil, mayonnaise and spicy food.
                    The increase of salt consumption (from 53% to 57%) is not a good change <Source sourcesRef={sourcesRef}>[11]</Source>, however is not the
                    main concern. The increase of vegetable oil (from 11% to 14%) and mayonnaise (from 4% to 8%) are
                    more threatening for the health of consumers. The vegetable oil is considered as a great source of
                    omega 6 which several investigations have related to cancer issues<Source sourcesRef={sourcesRef}>[1]</Source>. It is true that mayonnaise
                    can be done healthy, however, most of the time it is consumed pre-made with high rates of
                    vegetable oils. The increase of spicy food is more a curiosity than any other thing: Chili
                    (from 4% to 9.5%), cayenne (from 3% to 5.5%), jalapeno (from 2% to 5%)...
                </p>
                <p>
                    Decrease of ingredients: Sugar, butter, egg, milk, chicken, fruit.
                    The reduction of sugar (from 34.5% to 24%) and butter (from 29% to 23%) is a healthy change and
                    explains how the diet overall is healthier than the average diet dispite the increase of vegetable
                    oil. The decrease of egg (from 27% to 22%), milk (from 14% to 8%) and chicken (from 10% to 6.5%)
                    can lead to a lack of protein when following this diet. Make sure to eat enough products rich on
                    proteins. The last think, but not less interesting, is that the consumption of fruits is drasticaly
                    reduced: Blueberries (from 1% to 0.5%), strawberries (from 1.5% to 0.5%), peaches, raspberries...
                    This will not be a problem if you just eat friut as dessert.
                </p>
            </Typography>
        </>
    )
}

function MagnesiumDeficitSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
            <Typography variant={"h5"}>
                Magnesium deficiency
            </Typography>
            <Divider/>
            <Typography className={classes.mainText}>
                <p>
                    Magnesium lack is a problem that causes fisical problems like bad coordination or muscle spasms as
                    well as personality changes <Source sourcesRef={sourcesRef}>[14]</Source>. The way countering this can be with pills given by the doctor,
                    however, when the level of magnesium is not extreamly low, the way out is changing the diet into a
                    magnesium rich one. Products rich in magnesium are for example: spincah, beans, salmon, tuna,
                    chickpeas... <Source sourcesRef={sourcesRef}>[15, 16]</Source>
                </p>
                <p>
                    In this plot we can see, at the same time, the number of recipes reduction due to the diet,
                    as well as the change in the percentage of healthy recipes. The number of recipes is reduced a 75%,
                    with a final ammount of 195.876 recipes. This shows us how sometimes is hard to consume rich
                    magnesium diets. However, it is still 1/4 of the recipes, making it not impossible to do. We can
                    also see that the pecentage of unhealthy recipes increases from 68.99% to 66.26%, making magnesium
                    rich diet consumers easier to be healthy.
                </p>
                <p>
                    This plot shows the average number of ingredients per recipe in the iron rich diet and the regular
                    one. There is an increase in the iron rich free diet of 1 ingredients per recipe. This is a high
                    increase making magnesium rich meals more complex in terms of number of ingredients on them.
                </p>
                <Typography variant={"h5"}>
                    Changes in ingredients
                </Typography>
                <Divider/>
                <p>
                     When comparing the magnesium rich diet with the regular one, we can see that on average, ingredients
                    vary their rate of appearances in recipes a 13%. This is a really low value which will make the
                    analysis more boring but will be good news for those following this diet. Let's see the most
                    important ingredients that change their rate of appearances. Remember that the ingredients rich in
                    magnesium such as chickpeas are not taken into account as they will abviously increase, we are
                    looking for indirect increases and decreases.
                </p>
                <p>
                    <b>Increase of ingredients</b>: Vanilla, vegetable oil, chocolate, cilantro, wheat germ and tahini.
                    Eventhough most ingredients do not vary much, two of the ones that vary are not really healthy.
                    Vegetable oil<Source sourcesRef={sourcesRef}>[1]</Source> (from 11% to 13.5%) and chocolate
                    <Source sourcesRef={sourcesRef}>[3]</Source> (from 4% to 6%) are both unhealthy, but can be
                    replaced easily with olive oil and dark chocolate, which is actually high on magnesium
                    <Source sourcesRef={sourcesRef}>[15]</Source>. The rest
                    of the ingredients increasing are not important healthy-wise.
                </p>
                <p>
                    <b>Decrease of ingredients</b>: Pepper, parsley, barbacue sauce, pepperoni, pizza sauce, alcoholic products.
                    The reduction of pepper and parsley are not really relevant, and can be countered by using more of
                    them in general. The rest of the reductions are good for our health, explaing why the magnesium rich
                    diet is healthier than the average diet. Sauces, pepperoni <Source sourcesRef={sourcesRef}>[6]</Source>, and alcoholic products (gin, vodka,
                    bourbon...) are not recomended at all.
                </p>
            </Typography>
        </>
    )
}

function SpicySection({sourcesRef}) {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.mainText}>
                <p>
                    Spicy food is not a diet, but considering the popularity of this kind of food <Source sourcesRef={sourcesRef}>[20]</Source>, it can be interesting
                    to treat it as a diet and see the hidden changes on diet when consuming spicy food.
                </p>
                <p>
                    In this plot we can see, at the same time, the number of recipes reduction due to the diet, as well as
                    the change in the percentage of healthy recipes. The number of recipes is reduced a 78%, with a final
                    ammount of 171.429 recipes. This shows how spicy food is really common considering that sweet recipes
                    do not ever contain spicy food. We can also see that the pecentage of unhealthy recipes increases from
                    68.99% to 62.63%, making spicy meals in general healthier.
                </p>
                <p>
                    This plot shows the average number of ingredients per recipe in the iron rich diet and the regular one.
                    There is an increase in the iron rich free diet of 2.1 ingredients per recipe. This is a the highest
                    increase of all the diets, making spicy food the most complex in terms of number of ingredients per recipe.
                </p>
                <Typography variant={"h5"}>
                    Changes in ingredients
                </Typography>
                <Divider/>
                <p>
                    When comparing the "spicy diet" with the regular one, we can see that on average, ingredients vary their
                    rate of appearances in recipes a 45%. This is a extremly high value so let's see the most important
                    ingredients that change their rate of appearances. Remember that the ingredients that are spicy such as
                    chilli are not taken into account as they will abviously increase. We are looking for indirect increases
                    and decreases.
                </p>
                <p>
                    <b>Increase of ingredients</b>: Salt, meat, oils, sauces, other spicies and beans.
                    These increases are actually not surprising. With only spicy food, the sweet food is not considered,
                    therefore, increses of salt (from 53% to 64%) and oils are reasonbles. Just make sure the oil used is
                    olive oil and not vegetable oild <Source sourcesRef={sourcesRef}>[1]</Source>. The increase of meat shows how related is to spicy food: chicken
                    (from 10.5% to 16%), beef (from 6% to 9%), pork (from 3% to 5.5%) and shrimp (from 2% to 4%). The
                    increase of sauces make sense, as spicy food is generaly full of them: mayonnaise (from 4% to 7%) and
                    ketchup (from 2% to 5%). The increase of other spicies makes total sense (spicies are generaly used in
                    groups): parsley (from 8.5% to 11.5%), celery (from 5.5% to 8.5%), cumin (from 4% to 14%)... These
                    changes are not unhealthy them self.
                </p>
                <p>
                    <b>Decrease of ingredients</b>: Sugar, butter, egg, milk, flour, chocolate.
                    The decrease of these ingredients does also make sense as in a "spicy diet", all the sweet products
                    are not consumed.
                </p>
            </Typography>
        </>
    )
}

function GeneralSection({sourcesRef}) {
    const classes = useStyles();
    return (
        <Typography className={classes.mainText}>
            <p>
                Nowadays, huge advances in medicine and nutrition have led us to understand that the way we eat plays the most
                important role in our health. Following a diet rich in omega 6, for example, will lead us into different
                diseases, like cancer. Avoiding bad diets is “easily” achieved by eating a great variety of different food,
                while minimizing the amount of unhealthy meals. However, things can get harder when we have certain
                restrictions or obligations in our diet, for instance if we have to counter a lack of iron, or if we are vegan.
            </p>
            <p>
                In this research we have worked with 779.088 recipes that exist arround the internet to find out hidden
                relationships between ingredients and diets. We want to know how the diet of people affects their nutrition
                in a way that was unexpected, so it can help these people improve their health. Let's say that, for example,
                you have a lactose intolerance. You allready know you will not eat milk, cheese, yogurt... But is that it?
                Will there be other ingredients or grups of ingredients also reduced (or increased) because of this
                restriction? Will it be harder for you to be healthy than a person with a regular diet? Maybe even easier?
                How complex will the recipes you can access be? All this questions and more, will be answer in this article.
                The diets analyzed are the following:
            </p>
            <p>
                <ul>
                    <li>Lactose intolerance</li>
                    <li>Gluten intolerance or celiac dissease</li>
                    <li>Vegan</li>
                    <li>Vegetarian </li>
                    <li>Diet rich in iron</li>
                    <li>Diet rich in omega 3</li>
                    <li>Diet rich in magnesium</li>
                    <li>Spicy food (not really a diet, but still interesting)</li>
                </ul>

                You do not follow any of these diets? Do not leave yet, there are things for you too here...
            </p>
            <p>
                Firstly, let us present how the number of recipes available changes depending on the diet. In the plot below,
                you can see for each diet, the number of recipes available and also the percentage compared to the total
                amount of recipes analyzed. With a 63.7% of vegetarian meals, we can see how much we base our diet in meats,
                but this is even more impressing when we talk about veganism. Arround 80% of the recipes out there contain
                animal related products. The ammount of recipes with lactose is also surpsing with a 56.2%, and with gluten
                a almost 30%. In terms of the 3 diets rich in a specific nutrient, the most relevant is the omega 3. Several
                studies have talked about the problem of omega 3 to omega 6 ratio in our bodies (should be 1:1)
                <Source sourcesRef={sourcesRef}>[19]</Source>, and we
                can see how hard is to find recipes rich in omega 3 with only a 11% of the total number of recipes.
            </p>
                barplot of num recipes
            <p>
                We have labeled recipes as healthy or unhealthy based on their ingredients [ref] as we wanted to see how did
                the percentage of healthy recipes changed depending on your diet. If you are a vegan or vegetarian you will
                for sure eat more vegetables, however, this does not mean you will be more healthy, there are plenty of
                products vegans or vegetarians can eat that are considered as unhealthy. Actually, as you can see in the
                plot below, vegetarain diet is the only diet that has a percentual increase on the number of unhealthy
                recipes. The rest of the diets (some more, some less) make consumer easier to eat healthy, with a higher
                healthy-to-unhealthy ratio. However, we are still far away from a good situation, as in every diet more than
                half of the recipes contain unhealthy ingredients.
            </p>
                barplot of healthiness
            <p>
                You may woneder how is this posible. Howcome so many recipes are unhealthy. The answer is easier than you
                think. Nowadays, we base our diet in a few ingredients that can be found in a lot of the recipes out there.
                This are the "dominant ingredients". In the scatter plot below, you can see the top 265 most common
                ingredients and the ammount of recipes they are on (out of 779.088). As said before, these dominant
                ingredients condition the way we eat much more than a group of the non-dominant ones. Some of them, like
                sugar (2nd) or butter (4th) are considered as unhealthy, and that why many recipes are so unhealthy.
            </p>
            scatterplot
            <p>
                Now, having seen all this, we have done an analysis of the relationships between ingredients, how much ingredients
                are correlated with each other. This way we can study how the restriction of spcific ingredients affects the
                consumption rate of others and at the end, our nutrition. Below you can see as an example, a heatmap that
                shows the relationship of the dominant ingredients, whose relationships are the most important of the
                analysis. If you want to look for information on a spcific ingredient, because you are alergic, you do not
                like it, or you love it too much, check out our awsome search tool! There you will find the relationship of
                any ingredient (265 ingredients available) with the rest, and more information of its presence in diets.

            </p>
            heatmap

            <p>
                Moving on, we now present the analysis in detail of each diet. You will be able to see the healtiness analysis in a
                more intense way, a complexity analysis of the diet based on the ingredients complexity as well as the
                instruction complexity and, thanks to the correlation of ingredients mention before, an analysis of the
                consumption shifts caused indirectly by the diet.
            </p>
        </Typography>)

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
               <GeneralSection/>
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
                        <Tab label={"Vegetarian"}/>
                        <Tab label={"Gluten free"}/>
                        <Tab label={"Lactose free"}/>
                        <Tab label={"Iron deficiency"}/>
                        <Tab label={"Omega 3 deficiency"}/>
                        <Tab label={"High in magnesium"}/>
                        <Tab label={"Spicy"}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={0} currentIndex={selectedDiet}>
                    <VeganSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={1} currentIndex={selectedDiet}>
                    <VegetarianSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={2} currentIndex={selectedDiet}>
                    <GlutenFreeSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={3} currentIndex={selectedDiet}>
                    <LactoseFreeSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={4} currentIndex={selectedDiet}>
                    <IronDeficitSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={5} currentIndex={selectedDiet}>
                   <Omega3DeficitSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={6} currentIndex={selectedDiet}>
                    <MagnesiumDeficitSection sourcesRef={sourcesRef}/>
                </TabPanel>
                <TabPanel value={7} currentIndex={selectedDiet}>
                    <SpicySection sourcesRef={sourcesRef}/>
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
                        <ListItem>[10]<Link href={"https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"}>https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/</Link></ListItem>
                        <ListItem>[11] <Link href={"http://www.actiononsalt.org.uk/less/health/"}>http://www.actiononsalt.org.uk/less/health/</Link></ListItem>
                        <ListItem>[12] <Link href={"https://www.healthline.com/nutrition/iron-rich-plant-foods#section1"}>https://www.healthline.com/nutrition/iron-rich-plant-foods#section1</Link></ListItem>
                        <ListItem>[13] <Link href={"https://www.healthline.com/nutrition/11-healthy-iron-rich-foods"}>https://www.healthline.com/nutrition/11-healthy-iron-rich-foods</Link></ListItem>
                        <ListItem>[14] <Link href={"https://en.wikipedia.org/wiki/Magnesium_deficiency"}>https://en.wikipedia.org/wiki/Magnesium_deficiency</Link></ListItem>
                        <ListItem>[15] <Link href={"https://www.medicalnewstoday.com/articles/318595.php"}>https://www.medicalnewstoday.com/articles/318595.php</Link></ListItem>
                        <ListItem>[16] <Link href={"https://www.huffingtonpost.com.au/2017/07/10/what-foods-contain-magnesium_a_23024245/"}>https://www.huffingtonpost.com.au/2017/07/10/what-foods-contain-magnesium_a_23024245/</Link></ListItem>
                        <ListItem>[17] <Link href={"https://www.healthline.com/nutrition/12-omega-3-rich-foods#1"}>https://www.healthline.com/nutrition/12-omega-3-rich-foods#1</Link></ListItem>
                        <ListItem>[18] <Link href={"https://www.medicalnewstoday.com/articles/323144.php#fish-sources-of-omega-3"}>https://www.medicalnewstoday.com/articles/323144.php#fish-sources-of-omega-3</Link></ListItem>
                        <ListItem>[19] Simopulos, A. P., Evolutionary aspects of diet, the omega-6/omega-3 ratio and genetic variation: nutritional implications for chronic diseases.</ListItem>
                        <ListItem>[20] <Link href={"https://www.adv-bio.com/rising-popularity-hot-spicy-foods/"}>https://www.adv-bio.com/rising-popularity-hot-spicy-foods/</Link></ListItem>

                    </List>
                </Typography>
            </div>
        </div>
    );
}

export default DataStory;
