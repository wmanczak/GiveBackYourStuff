import React, {useState} from "react";
import Logo from "../images/Decoration.svg";
import {makeStyles} from "@material-ui/core/styles";
import Image2 from "../images/Backgroundimagecontact.jpg";
import Input from '@material-ui/core/Input';
import {Formik} from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
const newStyles = makeStyles({
    root: {
        width: "100%",
        height: 900,
        marginTop: 50,
        display: "flex"

    },

    textStyle: {
        fontSize: "2em",
        textAlign: "center",
        fontFamily: `'Open Sans', sans-serif`,
        color: "#737373",
        fontWeight: 500,
        marginTop: 100,


    },
    imageStyle: {
        opacity: "0.2",
        height: 900,
    },
    buttonStyle: {
        width: 100,
        height: 50,
        fontSize: "0.75em",
        marginRight: 10
    },
    formStyle: {
        display:"flex",

    },

})
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image2})`,
    }
}
const ContactForm = () => {
    const classes = newStyles()



    return (

        <section className={classes.root}>
            <div style={{width: "60%"}}>
                <div className={classes.imageStyle} style={styles.paperContainer}>
                </div>
            </div>
            <div >
                <div className={classes.textStyle}>
                    <p>Skontaktuj sie z nami</p>
                    <img src={Logo}/>
                </div>
                <Formik
                    initialValues={{email: "", name:"", message:""}}

                    onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Required"),
                        name: Yup.string()
                            .required("Required"),
                        message: Yup.string()
                            .required("Required")
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center"

                                }}>
                                <form onSubmit={handleSubmit}
                                      style={{}}
                                >
                                    <div className={classes.formStyle}>
                                        <div>

                                            <TextField
                                                label="Wpisz swojego maila"
                                                id="email"
                                                placeholder="Enter your email"
                                                type="text"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.email && touched.email
                                                        ? "text-input error"
                                                        : "text-input"}

                                                style={{
                                                    padding: ".5rem",
                                                    fontSize: "16px",
                                                    display: "block",
                                                }}


                                            />
                                            {
                                                errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )
                                            }
                                        </div>
                                        <div>

                                            <TextField
                                                label="Wpisz swoje imie"
                                                id="name"
                                                placeholder="Enter your name"
                                                type="text"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.name && touched.name
                                                        ? "text-input error"
                                                        : "text-input"}

                                                style={{
                                                    padding: ".5rem",
                                                    fontSize: "16px",
                                                    display: "block",
                                                }}


                                            />
                                            {
                                                errors.name && touched.name && (
                                                    <div className="input-feedback">{errors.name}</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div style={{
                                    }}>

                                    <TextField
                                        label="Wpisz swojego maila"
                                        id="message"
                                        multiline
                                        rows={2}
                                        rowsMax={4}
                                        fullWidth="true"
                                        placeholder="Enter your message"
                                        type="text"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.message && touched.message
                                                ? "text-input error"
                                                : "text-input"}

                                        style={{
                                            padding: ".5rem",
                                            fontSize: "16px",
                                            display: "block",
                                        }}


                                    />
                                    </div>

                                    {
                                        errors.message && touched.message && (
                                            <div className="input-feedback">{errors.message}</div>
                                        )
                                    }
                                    <div style={{
                                        display:"flex",
                                        justifyContent:"flex-end"
                                    }}>
                                    <Button
                                        type="submit" disabled={isSubmitting}
                                        className={classes.buttonStyle} variant="outlined">Wyslij</Button>
                                    <Button
                                        type="button"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                        className={classes.buttonStyle} variant="outlined">Usun</Button>
                                    </div>

                                </form>
                            </div>
                        );
                    }}
                </Formik>
            </div>
       
        </section>
    )
}

export default ContactForm