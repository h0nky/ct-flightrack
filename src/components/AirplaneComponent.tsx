import React, { FC, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PlaneSVG } from '../images/airplane.svg';
import { Flight } from "../api-interfaces";

const ImageWrapper = styled.div`
    width: 30px;
    height: 30px;
`;

export const AirplaneComponent: FC<{ lat: number|string, lng: number|string, flightData: Flight }> = ({ flightData }): ReactElement => {
    const history = useHistory();

    const onHandleClick = () => {
        history.push({
            pathname: `/airplane-details/${flightData[0]}`,
            state: flightData 
        });
    };

    return (
        <ImageWrapper onClick={onHandleClick}>
            <PlaneSVG />
        </ImageWrapper>
    );
}
