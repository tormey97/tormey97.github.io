import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => {
    console.log(theme);
    return ({
        section: {
            padding: "0 15% 0 15%",
            marginTop: 40
        },
        headerSection: {
            height: 120,
            textAlign: "center",
            backgroundColor: theme.palette.primary.dark,
            color: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20
        },
        mainText: {
            fontSize: "16px",
        },
        tabSection: {
            marginTop: 10,
            padding: 6,
            backgroundColor: "#EEE",
            borderRadius: 6,
        },
        footer: {
            height: 100,
        },
        toolbar: theme.mixins.toolbar,
        factSheet: {
            padding: "20px 0 0 0"
        },
        dietCheckboxList: {
            listStyleType: "none"
        }
    })});

export default useStyles;