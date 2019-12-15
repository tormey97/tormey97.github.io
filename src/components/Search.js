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
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

function Search() {
    const classes = useStyles();
    const [foundRecipes, setFoundRecipes] = React.useState([]);
    const [currentIngredient, setCurrentIngredient] = React.useState(null);
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

    const selectIngredient = (event, newValue) => {
        searchForRecipes(event, newValue);
        setCurrentIngredient(newValue);
    };

    const searchForRecipes = (event, newValue) => {
        let ingredient = newValue;
        if (ingredient === null) {
            return
        }
        let matches = [];
        for (let i in recipes) {
            let match = true;
            if (!recipes[i].ingredients.includes(ingredient)) {
                match = false;
                break
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
                    onChange={selectIngredient}
                />
                {
                    (currentIngredient === null) ? <></> :
                        <div>
                            You've selected {currentIngredient}...
                            <List>
                                {foundRecipes.map(value => {
                                    return (
                                        <ListItem button>
                                            {recipes[value].name}
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Column 1
                                        </TableCell>
                                        <TableCell>
                                            Column 2
                                        </TableCell>
                                        <TableCell>
                                            Column 3
                                        </TableCell>
                                        <TableCell>
                                            Column 4
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            Column 1
                                        </TableCell>
                                        <TableCell>
                                            Column 2
                                        </TableCell>
                                        <TableCell>
                                            Column 3
                                        </TableCell>
                                        <TableCell>
                                            Column 4
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Column 1
                                        </TableCell>
                                        <TableCell>
                                            Column 2
                                        </TableCell>
                                        <TableCell>
                                            Column 3
                                        </TableCell>
                                        <TableCell>
                                            Column 4
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                }
            </div>
        </div>
    );
}

export default Search;
