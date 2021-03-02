import { useLocation } from "react-router";
import useJetPhotos from "../hooks/useJetPhotos";
import useAirplaneImages from "../hooks/useAirplaneImages";
import styled from "styled-components";
import { Flight, JetPhotos } from "../api-interfaces";
import axios from "axios";
import { getConfigUrl } from "../api-config";
import { useMutation, useQueryClient } from "react-query";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #a9a9a9;
`;

const Card = styled.div`
    border-radius: 6px;
    width: 400px;
    height: 600px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05), 0px 14px 20px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h2`
    color: #080E14;
`;

export const AirplaneDetails = () => {
    const { state: [ icao24, callsign, originCountry, longtitude, latitude, baro_altitude, velocity ] } = useLocation<Flight>();
    const { data, isLoading } = useJetPhotos();

    const isImageRequired = () => !isLoading && data.find((item: JetPhotos) => item.airplane_icao === icao24);
    
    useAirplaneImages(icao24, !isImageRequired());
    

    return (
        <Container>
            <Card>
                <Title>{callsign}</Title>
                <Title>{originCountry}</Title>
                <Title>{longtitude}</Title>
                <Title>{latitude}</Title>
                <Title>{baro_altitude}</Title>
                <Title>{velocity}</Title>
            </Card>
        </Container>
    );
}