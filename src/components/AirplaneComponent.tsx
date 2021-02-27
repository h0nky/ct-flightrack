import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { ReactComponent as PlaneSVG } from '../images/airplane.svg';

const ImageWrapper = styled.div`
    width: 30px;
    height: 30px;
`;

export const AirplaneComponent: FC<{ lat: number, lng: number }> = (): ReactElement => (
    <ImageWrapper>
        <PlaneSVG />
    </ImageWrapper>
);
