import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import { AirplaneComponent } from "../components/AirplaneComponent";
import useFlights from "../hooks/useFlights";
import { Flight } from "../api-interfaces";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const MapComponent: FC = (): ReactElement => {
    const { data, isSuccess } = useFlights();
    return (
        <Container>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: 'AIzaSyCOlDs0H56Q6YH1ZeNwqTU7CT7g-CMGsWY' }}
                defaultCenter={{ lat: 38.7, lng: -8 }}
                defaultZoom={5}
            >
                {isSuccess && data.map((flight: Flight) => {
                    const [
                        icao24,
                        callsign,
                        originCountry,
                        longtitude,
                        latitude,
                        baroAltitude,
                        velocity,
                        trueTrack
                    ] = flight;
                    return (
                        <AirplaneComponent
                            flightData={flight}
                            key={icao24}
                            trueTrack={trueTrack}
                            icao={icao24}
                            lat={latitude}
                            lng={longtitude}
                        />
                    );
                })}
            </GoogleMapReact>
        </Container>
    );
}