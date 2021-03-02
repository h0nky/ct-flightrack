import React, { FC, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PlaneSVG } from '../images/airplane.svg';
import { Flight } from "../api-interfaces";

const ImageWrapper = styled.div`
    width: 30px;
    height: 30px;
`;

export const AirplaneComponent: FC<{ lat: number|string, lng: number|string, trueTrack: number|string, icao: number|string, flightData: Flight }> = ({ flightData, trueTrack, icao }): ReactElement => {
    const history = useHistory();

    const onHandleClick = () => {
        history.push({
            pathname: `/airplane-details/${icao}`,
            state: flightData 
        });
    };

    return (
        <ImageWrapper
            style={{transform: `rotate(${trueTrack}deg)`}}
            onClick={onHandleClick}
        >
            <PlaneSVG />
        </ImageWrapper>
    );
}
