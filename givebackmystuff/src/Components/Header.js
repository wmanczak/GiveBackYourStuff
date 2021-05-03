import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },

    headerStyle: {
        color: "#737373",
        fontFamily: `'Open Sans', sans-serif`,
        float: "right",
        marginRight:10

    },
    indicatorColor: {
        height: 54,
        border: "1px solid #737373 ",
    },

});

const MainHeader = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>

            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="#737373"
                className={classes.headerStyle}
                aria-label="icon label tabs example"
                TabIndicatorProps={{className: classes.indicatorColor}}
            >
                <Tab label="Start" component={Link} to="/"/>
                <Tab label="O co chodzi ?"/>
                <Tab label="O nas"/>
                <Tab label="Fundacja i organizacja"/>
                <Tab label="Kontakt"/>
            </Tabs>
        </Paper>
    );
}

export default MainHeader;