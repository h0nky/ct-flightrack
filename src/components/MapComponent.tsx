import React, { useState } from "react";
import axios from "axios";
import { useQuery } from 'react-query';
import { AllFlights, RefetchInterval } from "../api-interfaces";
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import { getConfigUrl } from "../api-config";
import { AirplaneComponent } from "../components/AirplaneComponent";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const MapComponent = () => {
    const [ intervalMs ] = useState<RefetchInterval>(20000)
    const [ value, setValue ] = useState<AllFlights>([])
  
    useQuery(
      'allFlights',
      async () => {
        const res = await axios.get(getConfigUrl('allFlights'));
        setValue(res.data);
      },
      {
        refetchInterval: intervalMs,
      }
    )

    return (
        <Container>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{ key: 'AIzaSyCOlDs0H56Q6YH1ZeNwqTU7CT7g-CMGsWY' }}
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={11}
            >
                {value.map((flight: any) => (
                    <AirplaneComponent
                        key={flight[1]}
                        lat={flight[3]}
                        lng={flight[4]}
                    />
                ))}
            </GoogleMapReact>
        </Container>
    );
}