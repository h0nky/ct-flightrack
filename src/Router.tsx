import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { MapComponent } from "./components/MapComponent";
import { AirplaneDetails } from "./components/AirplaneDetails";

export const Router = () => (
    <Fragment>
        <Route exact path="/" component={MapComponent} />
        <Route exact path="/airplane-details/:id" component={AirplaneDetails} />
    </Fragment>
);
