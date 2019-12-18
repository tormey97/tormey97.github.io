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
import ingredientsData from "./ingredients"
import dietFrequencyData from "./ingredientsInDiets"
import correlationData from "./data"
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Chip from "@material-ui/core/Chip/Chip";
import MuiTooltip from "@material-ui/core/Tooltip/Tooltip"
import {
    BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
    XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, Label
} from 'recharts';
import Button from "@material-ui/core/Button/Button";

const diets = [
    "LactoseFree",
    "GlutenFree",
    "Vegan",
    "Vegetarian",
    "IronRich",
    "Omega3Rich",
    "MagnesiumRich",
    "Spicy",
    "Unhealthy"
];

function Search() {
    const classes = useStyles();
    const [currentIngredient, setCurrentIngredient] = React.useState(null);
    const searchValues = Object.keys(ingredientsData);

    const dietFreqData = [];
    if (dietFrequencyData[currentIngredient] !== undefined) {
        for (const [key, value] of Object.entries(dietFrequencyData[currentIngredient])) {
            dietFreqData.push({
                name: key, amountOfRecipes: value
            })
        }
    }

    console.log(dietFreqData);

    const selectIngredient = (event, newValue) => {
        setCurrentIngredient(newValue);
    };

    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.section}>
                <Typography variant={"h5"}>
                    Search tool
                </Typography>
                <Divider/>
                <Typography className={classes.mainText}>
                    <p>We've created a tool that can give the user some interesting information about a selection of ingredients.</p>
                    <p>To use it, simply input an ingredient in the searchbar below. Information about the ingredient will be displayed underneath it.</p>
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
                        <div className={classes.factSheet}>
                            <Typography>
                                <b>{currentIngredient}</b> is categorized as follows:
                            </Typography>
                            <ul className={classes.dietCheckboxList}>
                            {
                                diets.map(diet => {
                                    return (
                                        <li style={{display: "inline", margin: 2}}>
                                            <Chip label={diet} color={ingredientsData[currentIngredient.toLowerCase()][diet] === 1 ? "primary" : undefined}>
                                            </Chip>
                                        </li>
                                        )
                                })
                            }
                            </ul>
                            <Typography>
                                <p>The following bar graph shows how frequently <b>{currentIngredient}</b> is used in the recipes that fall into each dietary category:</p>
                            </Typography>
                            <BarChart width={800} height={400} data={dietFreqData}>
                                <XAxis dataKey="name" tick={{fontSize: 12}} interval={0} />
                                <YAxis>
                                </YAxis>
                                <Bar dataKey="amountOfRecipes" fill="#21B"/>
                                <Tooltip />
                            </BarChart>
                            <Typography>
                                <p>The following table shows how frequently <b>{currentIngredient}</b> occurs with all the other selected ingredients, as well as how often each ingredient occurs in recipes in general.</p>
                                <p>Ingredients with <b style={{color: "#0F0"}}>green</b> backgrounds have a higher occurrence rate with {currentIngredient} than its general occurrence rate, while ingredients with a <b style={{color: "#F00"}}>red</b> background have the opposite.</p>
                            </Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Ingredient
                                        </TableCell>
                                        <TableCell>
                                            Frequency with {currentIngredient}
                                        </TableCell>
                                        <TableCell>
                                            Overall frequency
                                        </TableCell>
                                        <TableCell>
                                            Relative frequency with {currentIngredient}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        searchValues.map(value => {
                                            let correlationWithIngredient = correlationData[currentIngredient][value];
                                            let generalFrequency = correlationData.general[value];
                                            correlationWithIngredient = correlationWithIngredient === undefined ? 0 : correlationWithIngredient.toFixed(3);
                                            generalFrequency = generalFrequency === undefined ? 0.001 : (generalFrequency/100).toFixed(3);
                                            let relativeFrequency = (correlationWithIngredient / (generalFrequency)).toFixed(3);
                                            if (value !== currentIngredient) {
                                                return <TableRow style={{backgroundColor: correlationWithIngredient > generalFrequency ? "#DFD" : "#FDD"}}>
                                                    <TableCell>
                                                        {value}
                                                    </TableCell>
                                                    <TableCell>
                                                        <MuiTooltip title={value + " occurs in " + (correlationWithIngredient * 100).toFixed(1) + "% of recipes with " + currentIngredient} arrow>
                                                            <span>
                                                                {correlationWithIngredient}
                                                            </span>
                                                        </MuiTooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        <MuiTooltip title={value + " occurs in " + (generalFrequency * 100).toFixed(1) + "% of all recipes"} arrow>
                                                            <span>
                                                                {generalFrequency}
                                                            </span>
                                                        </MuiTooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        {relativeFrequency}
                                                    </TableCell>
                                                </TableRow>
                                            }
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </div>
                }
            </div>
        </div>
    );
}

export default Search;
