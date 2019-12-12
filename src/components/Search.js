import React from 'react';
import useStyles from "../styles/main"
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import TextField from "@material-ui/core/TextField/TextField";
import IconButton from "@material-ui/core/IconButton/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";

function Search() {
    const classes = useStyles();
    const [foundRecipes, setFoundRecipes] = React.useState([]);
    const searchValues = [
        "Test", "Salmon", "Salt", "Hey", "Tea", "Large", "Telephone"
    ];

    const recipes = [
        {name: "pesto", ingredients: ["Salmon", "Salt", "Tea"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
        {name: "tortilla", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla2", ingredients: ["Hey", "Salmon", "Telephone"]},
        {name: "tortilla3", ingredients: ["Hey", "Salmon", "Telephone", "Large"]},
    ];

    const searchForRecipes = (event, newValue) => {
        let ingredients = newValue;
        if (ingredients.length === 0) {
            return
        }
        let matches = [];
        for (let i in recipes) {
            let match = true;
            for (let j in ingredients) {
                if (!recipes[i].ingredients.includes(ingredients[j])) {
                    match = false;
                    break
                }
            }
            if (match) {
                matches.push(i)
            }
        }
        setFoundRecipes(matches)
    };

    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.section}>
                <Typography variant={"h4"}>
                    Search tool
                </Typography>
                <Divider/>
                <Typography>
                    <p>
                        In this section we present a tool that allows the user to input ingredients and output recipes.
                    </p>
                </Typography>
            </div>
            <div className={classes.section}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={searchValues}
                    getOptionLabel={option => option}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Ingredients search"
                            placeholder="Ingredient"
                            fullWidth
                        />
                    )}
                    onChange={searchForRecipes}
                />
                <List>
                    {foundRecipes.map(value => {
                        return (
                            <ListItem button>
                                {recipes[value].name}
                            </ListItem>
                        )
                    })}
                </List>
            </div>

        </div>
    );
}

export default Search;
