import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Map } from "./components/Map";
import { AirplaneDetails } from "./components/AirplaneDetails";

export const Router = () => (
    <Fragment>
        <Route path="/" component={Map} />
        <Route path="/airplane-details" component={AirplaneDetails} />
    </Fragment>
);
