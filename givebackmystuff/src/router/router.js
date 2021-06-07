import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainRegisterView from "../Components/MainRegisterView";
import LoggingSection from "../Components/Logging";
import MainHeader from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import ThreeColumns from "../Components/ThreeColumns";
import SimpleSteps from "../Components/SimpleSteps";
import AboutUs from "../Components/AboutUs";
import ContactForm from "../Components/ContactForm";
import MainFooter from "../Components/Footer";
import LoggingView from "../Components/MainLoggingView";
import FloatingActionButtonZoom from "../Components/Carousel";
const AppRouter = () => {
    return (
        <Router>
            <LoggingSection/>
            <MainHeader/>
            <MainContainer/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <ContactForm/>
            <FloatingActionButtonZoom/>
            {/*<LoggingView/>*/}
            <MainFooter/>
            <Switch>
                <Route exact path="/">
                </Route>
                <Route path="/Log">
                </Route>
                <Route path="/Register">
                    <MainRegisterView/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter