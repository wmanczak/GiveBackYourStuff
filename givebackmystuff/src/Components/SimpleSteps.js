import React from "react";
import Logo from "../images/Decoration.svg";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import icon1 from "../images/Icon-1.svg";
import icon2 from "../images/Icon-2.svg"
import icon3 from "../images/Icon-3.svg"
import icon4 from "../images/Icon-4.svg"

const newStyles = makeStyles({
    root: {
        width: "100%",
    },
    textStyle: {
        fontSize: "2em",
        textAlign: "center",
        fontFamily: `'Open Sans', sans-serif`,
        color: "#737373",
        fontWeight: 500,
        margin: "80px 0px"

    },
    divStyle: {
        backgroundColor: "#F0F1F1",
        height: 300,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    buttonStyle: {
        width: 200,
        height: 100,
        fontSize: "1.5em",
        marginTop: 50,

    },
    div2Style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 50,

    },
    div3style: {},
    spanStyle: {
        borderBottom: "2px solid #737373",
        width: 100,
        marginLeft:25,
        marginTop:10

    },

    textHeaderStyle: {
        width: 150,
        textAlign:"center",
    },

    imageStyle:{
        marginLeft:30
    },


})

const SimpleSteps = () => {
    const classes = newStyles()
    return (
        <section className={classes.root}>
            <div className={classes.textStyle}>
                <p>Wystarcza 4 proste kroki</p>
                <img src={Logo} />
            </div>

            <div className={classes.divStyle}>

                <div className={classes.div3style}>
                    <img src={icon1} className={classes.imageStyle}/>
                    <div className={classes.textHeaderStyle}>
                        <span>Wybierz rzeczy</span>
                        <div className={classes.spanStyle}></div>
                        <p>ubrania, zabawki, sprzet i inne</p>
                    </div>
                </div>
                <div>
                    <img src={icon2} className={classes.imageStyle}/>
                    <div className={classes.textHeaderStyle}>
                        <span>Spakuj je</span>
                        <div className={classes.spanStyle}></div>

                        <p>skorzystaj z workow na smieci</p>
                    </div>
                </div>
                <div>
                    <img src={icon3} className={classes.imageStyle}/>
                    <div className={classes.textHeaderStyle}>
                        <span>Zdecyduj komu chcesz pomoc</span>
                        <div className={classes.spanStyle}></div>

                        <p>wybierz zaufane miejsce</p>
                    </div>
                </div>
                <div>
                    <img src={icon4} className={classes.imageStyle}/>
                    <div className={classes.textHeaderStyle}>
                        <span>Zamow kuriera</span>
                        <div className={classes.spanStyle}></div>


                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>


            </div>
            <div className={classes.div2Style}>
                <Button className={classes.buttonStyle} variant="outlined">ODDAJ RZECZY</Button>

            </div>
        </section>

    )
}

export default SimpleSteps