import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Logo from "../images/Decoration.svg"

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        height: 300,
        backgroundColor: "#FAD648",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#3C3C3C",
        fontFamily: `'Open Sans', sans-serif`,
    },
    columnStyle: {
        width: 300,
        textAlign: "center"


    },
    hStyle:{
        fontSize:"6em"
    },
    pStyle:{
    }
});
const ThreeColumns = () => {
    const classes = useStyles();
    return (

        <section>
            <div className={classes.root}>
                <div className={classes.columnStyle}>
                    <span className={classes.hStyle}>10</span>
                    <p >ODDANYCH WORKOW</p>
                    <span className={classes.pStyle}>Lorem ipsum dolor sit amet,consectetur adipisc Pellentesque vel enim viverra elementuma Aliquam erat volutpat </span>
                </div>
                <div className={classes.columnStyle}>
                    <span className={classes.hStyle}>5</span>
                    <p>WSPARTYCH ORGANIZACJI</p>
                    <span>Lorem ipsum dolor sit amet,consectetur adipisc Pellentesque vel enim viverra elementuma Aliquam erat volutpat </span>
                </div>
                <div className={classes.columnStyle}>
                    <span className={classes.hStyle}>7</span>
                    <p>ZORGANIZOWANYCH ZBIOREK</p>
                    <span>Lorem ipsum dolor sit amet,consectetur adipisc Pellentesque vel enim viverra elementuma Aliquam erat volutpat </span>
                </div>

            </div>

        </section>
    )
}

export default ThreeColumns;