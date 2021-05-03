import React from "react";
import Logo from "../images/Decoration.svg";
import {makeStyles} from "@material-ui/core/styles";
import icon5 from "../images/Signature.svg"
import people from "../images/People.jpg"
import Image2 from "../images/Backgroundimagecontact.jpg";

const newStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        marginTop: 200
    },
    textStyle: {
        fontSize: "2em",
        textAlign: "center",
        fontFamily: `'Open Sans', sans-serif`,
        color: "#737373",
        fontWeight: 500,
        width: 700,
       marginLeft:100,
        marginRight:100


    },
    signatureStyle:{
        marginLeft:400
    },
    backgroundStyle: {
        width: 1000
    },
})

const AboutUs = () => {
    const classes = newStyles();
    return (

        <section className={classes.root}>
            <div className={classes.textStyle}>
                <p>O nas</p>
                <img src={Logo}/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed
                    pea prairie turnip leek lentil turnip green parsnip
                </p>
                <img src={icon5} className={classes.signatureStyle}/>
            </div>
            <div>
                <img src={people} className={classes.backgroundStyle}/>

            </div>
        </section>
    )
}

export default AboutUs;