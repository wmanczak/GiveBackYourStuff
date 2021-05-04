import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import {green} from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Slider from 'infinite-react-carousel';

const TabPanel = (props) => {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({

    sectionStyle: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    root: {
        width: 900,
        position: 'relative',
        minHeight: 200,
    },
    sliderStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "2px solid black",
        margin:"0px 60px"
    },
    sliderStyle2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin:"0px 60px"

    },

    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
        headerStyle: {
            color: "#737373",
            fontFamily: `'Open Sans', sans-serif`,
            float: "right",
            marginRight: 10

        },
        indicatorColor: {
            height: 54,
            border: "1px solid #737373 ",
        },
        tabStyle: {
            marginRight: 50
        },

    },
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <section className={classes.sectionStyle}>
            <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="#737373"

                    aria-label="action tabs example"
                    className={classes.headerStyle}
                    TabIndicatorProps={{className: classes.indicatorColor}}

                >
                    <Tab label="Fundacjom" {...a11yProps(0)} />
                    <Tab label="Organizacjom pozarzadowym" {...a11yProps(1)} />
                    <Tab label="Lokalnym zbiorkom" {...a11yProps(2)} />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div style={{marginLeft: "25%"}}>

                            <p style={{width: 400, textAlign: "center"}}>
                                W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z
                                ktorymi wspolpracujemy. mozesz sprawdzic czym sie zajmuja komu pomagaja i czego
                                potrzebuja
                            </p>
                        </div>
                        <Slider dots>
                            <div>

                            </div>
                            <div>
                            </div>
                            <div>
                            </div>

                        </Slider>
                    </TabPanel>
                    <div style={{
                        width: "100%",

                    }}>
                        <div style={{marginLeft: "25%"}}>
                            <p style={{width: 400, textAlign: "center"}}>
                                W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z
                                ktorymi wspolpracujemy. mozesz sprawdzic czym sie zajmuja komu pomagaja i czego
                                potrzebuja
                            </p>
                        </div>
                        <Slider dots>
                            <div>
                                <div className={classes.sliderStyle}>
                                    <div>
                                        <h3>Organizacja "Lorem Ipsum 1"</h3>
                                        <p>quis varius quam quisque id diam vel quam elementum pulvinar</p>
                                    </div>
                                    <span>Egestas,sed, tempus</span>

                                </div>
                                <div>
                                    <div className={classes.sliderStyle}>
                                        <div>
                                            <h3>Organizacja "Lorem Ipsum 2"</h3>
                                            <p>quis varius quam quisque id diam vel quam elementum pulvinar</p>
                                        </div>
                                        <span>Egestas,sed, tempus</span>

                                    </div>
                                </div>
                                <div>
                                    <div className={classes.sliderStyle2}>
                                        <div>
                                            <h3>Organizacja "Lorem Ipsum 3"</h3>
                                            <p>quis varius quam quisque id diam vel quam elementum pulvinar</p>
                                        </div>
                                        <span>Egestas,sed, tempus</span>

                                    </div>
                                </div>

                            </div>
                            <div>
                            </div>


                        </Slider>
                    </div>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div style={{marginLeft: "25%"}}>
                            <p style={{width: 400, textAlign: "center"}}>
                                W naszej bazie znajdziesz liste zweryfikowanych Fundacji, z
                                ktorymi wspolpracujemy. mozesz sprawdzic czym sie zajmuja komu pomagaja i czego
                                potrzebuja
                            </p>
                        </div>
                        <div>
                            <div className={classes.sliderStyle}>
                                <div>
                                    <h3>Zbiorka "Lorem Ipsum 1"</h3>
                                    <p>quis varius quam quisque id diam vel quam elementum pulvinar</p>
                                </div>
                                <span>Egestas,sed, tempus</span>

                            </div>
                            <div>
                                <div className={classes.sliderStyle}>
                                    <div>
                                        <h3>Zbiorka "Lorem Ipsum 2"</h3>
                                        <p>quis varius quam quisque id diam vel quam elementum pulvinar</p>
                                    </div>
                                    <span>Egestas,sed, tempus</span>

                                </div>
                            </div>
                            <div>
                                <div className={classes.sliderStyle2}>
                                    <div>
                                        <h3>Zbiorka "Lorem Ipsum 3"</h3>
                                        <p>quis varius quam quisque id diam vel quam elementum pulvinar</p>
                                    </div>
                                    <span>Egestas,sed, tempus</span>

                                </div>
                            </div>

                        </div>
                        <div>
                        </div>


                    </TabPanel>
                </SwipeableViews>

            </div>
        </section>
    );
}

