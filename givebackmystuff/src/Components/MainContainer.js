import React from "react";
import Image from "../images/backgroundImage.jpg"
import {makeStyles} from "@material-ui/core/styles";
import Logo from "../images/Decoration.svg"
import Button from "@material-ui/core/Button";
const newStyles = makeStyles({
    root: {
        width: "75%",
        height: 950,
        marginLeft: "-420px"
    },
    mainStyle: {
        width: "100%",
        display: "flex",
        alignItems: "center"

    },
    textStyle: {
        fontSize: "1.5em",
        textAlign: "center",
        fontFamily: `'Open Sans', sans-serif`,
        color: "#737373",
        fontWeight: 500,

    },
    buttonStyle:{
        width:200,
        height:100,
        fontSize:"0.75em",
        marginRight:10
    }
})
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
    }
}
const MainContainer = () => {
    const classes = newStyles();
    return (
        <section className={classes.mainStyle}>
            <div className={classes.root} style={styles.paperContainer}></div>
            <div className={classes.textStyle}>
                <p>Zacznij pomagac! </p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <img src={Logo}/>
                <div>
                <Button className={classes.buttonStyle} variant="outlined">ODDAJ RZECZY</Button>
                <Button className={classes.buttonStyle} variant="outlined">ZORGANIZUJ ZBIORKE</Button>
                </div>
            </div>
        </section>


    )
}

export default MainContainer;