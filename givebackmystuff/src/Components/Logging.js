import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

const LoggingSection = () => {
    const classes = useStyles();

    return (
        <section style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
        }}>
            <div className={classes.root}>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/Log"
                >Zaloguj</Button>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/Register"
                >Zaloz konto</Button>

            </div>
        </section>
    );
}
export default LoggingSection