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
    const [currentIngredient, setCurrentIngredient] = React.useState("Salmon");
    const searchValues = [
        "Test", "Salmon", "Salt", "Hey", "Tea", "Large", "Telephone"
    ];

    const corrMatrix = {
    };

    for (let i in searchValues) {
        corrMatrix[searchValues[i]] = {};
        for (let j in searchValues) {
            corrMatrix[searchValues[i]][searchValues[j]] = Math.random();
            console.log(corrMatrix)
        }
    }

    const selectIngredient = (event, newValue) => {
        setCurrentIngredient(newValue);
    };

    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.section}>
                <Typography variant={"h4"} style={{textAlign: "center"}}>
                    Search tool
                </Typography>
                <Divider/>
                <Typography>
                    In this section we present a tool that allows the user to input ingredients and output recipes.
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
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Ingredient
                                        </TableCell>
                                        <TableCell>
                                            Ratio 1
                                        </TableCell>
                                        <TableCell>
                                            Ratio 2
                                        </TableCell>
                                        <TableCell>
                                            Ratio change
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        searchValues.map(value => {
                                            console.log(value, currentIngredient, corrMatrix[currentIngredient][value], corrMatrix)
                                            return <TableRow>
                                                <TableCell>
                                                    {value}
                                                </TableCell>
                                                <TableCell>
                                                    {corrMatrix[currentIngredient][value]}
                                                </TableCell>
                                                <TableCell>
                                                    {corrMatrix[currentIngredient][value]}
                                                </TableCell>
                                                <TableCell>
                                                    {corrMatrix[currentIngredient][value]}
                                                </TableCell>
                                            </TableRow>
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
