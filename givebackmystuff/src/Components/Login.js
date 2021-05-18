import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../images/Decoration.svg";
const newStyles = makeStyles({
    root: {
        width: "100%",
        marginTop: 50,
        display: "flex",
        justifyContent: "center",

},

    textStyle: {
        fontSize: "2em",
        textAlign: "center",
        fontFamily: `'Open Sans', sans-serif`,
        color: "#737373",
        fontWeight: 500,
        marginTop: 100,


    },
    textField: {
        width: '25ch',
    },
    divStyle: {
        display: "flex",
        flexDirection: "column",
    },
    signStyle:{
        border: "1px solid #737373 ",
        padding:"5px"

    }


})

const LoginNew = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError} = props;
    const classes = newStyles()

    return (
        <section className={classes.root}>
            <div>
                <div className={classes.textStyle}>
                    <p>Zaloguj sie</p>
                    <img src={Logo}/>
                </div>

                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p>{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p>{passwordError}</p>
                <div>
                    {hasAccount ? (
                    <>
                        <Button variant="outlined" size="large" onChange={handleLogin} > Sign in</Button>
                        <p> Don't have an account ? <span className={classes.signStyle} onClick={()=>setHasAccount(!hasAccount)} >Sign up</span></p>

                        </>
                    ) : (
                        <>
                            <Button variant="outlined" size="large"  onClick={handleSignUp} >Sign up</Button>
                            <p >Have an account > <span className={classes.signStyle} onClick={()=>setHasAccount(!hasAccount)}  >Sign in</span></p>

                        </>
                    )}
                </div>
            </div>

        </section>
    )
}


export default LoginNew;