import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { MapComponent } from "./components/MapComponent";
import { AirplaneDetails } from "./components/AirplaneDetails";

export const Router = () => (
    <Fragment>
        <Route path="/" component={MapComponent} />
        <Route path="/airplane-details" component={AirplaneDetails} />
    </Fragment>
);
