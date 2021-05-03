import React from "react"
import Face from "../images/Facebook.svg"
import Insta from "../images/Instagram.svg"
import {makeStyles} from "@material-ui/core/styles";

const newStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center"
    },
    imagesStyle: {
        marginRight: 10
    }

})
const MainFooter = () => {
    const classes = newStyles();
    return (

        <section>
            <div className={classes.root}>
                <p>Copyright by Coders Lab</p>
                <div>
                    <img src={Face} className={classes.imagesStyle}/>
                    <img src={Insta}/>
                </div>
            </div>
        </section>

    )
}

export default MainFooter;