import React, { FC, ReactElement, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import useJetPhotos from "../hooks/useJetPhotos";
import useAirplaneImages from "../hooks/useAirplaneImages";
import styled from "styled-components";
import { Flight, JetPhotos } from "../api-interfaces";
import useAddNewPhoto from "../hooks/useAddNewPhoto";
import useRemoveImage from "../hooks/useRemoveImage";

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
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    color: #080E14;
    font-weight: 600;
    font-size: 18px;
`;

const Image = styled.img`
    height: 264px;
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
`;

const CardBody = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px;
`;

const Button = styled.button`
    padding: 4px;
    color: #080E14;
    width: 50%;
    margin: 0 auto;
`;

const BackButton = styled.span`
    color: #080E14;
    font-weight: 600;
    font-size: 18px;
    align-self: center;
    cursor: pointer;
`;

export const AirplaneDetails: FC = (): ReactElement => {
    const history = useHistory();
    const [ mainImage, setMainImage ] = useState<JetPhotos>();
    const { state: [ icao24, callsign, originCountry, baro_altitude, velocity ] } = useLocation<Flight>();
    const { data: jetPhotos } = useJetPhotos();

    const isImageRequired = (): boolean => {
        const result = jetPhotos?.find((item: JetPhotos) => item.airplane_icao === icao24);
        return !result
    }

    const { data: airplaneImage } = useAirplaneImages(icao24, isImageRequired());

    useEffect(() => {
        const result = jetPhotos?.find((item: JetPhotos) => item.airplane_icao === icao24);
        if (result) setMainImage(result);
    }, [icao24, jetPhotos]);

    const mutationUpdate: any = useAddNewPhoto({
        username: 'jenya golovnov',
        airplane_icao: icao24,
        airplane_image: airplaneImage
    });

    if (mutationUpdate.isIdle) mutationUpdate.mutate({
        username: 'jenya golovnov',
        airplane_icao: icao24,
        airplane_image: airplaneImage
    });

    const mutationRemove = useRemoveImage(mainImage?._id);

    const onHandleClick = (): void => {
        history.goBack();
    }

    return (
        <Container>
            <Card>
                <CardHeader>
                    <BackButton onClick={onHandleClick}>{'<'}</BackButton>
                    <Title>{originCountry}</Title>
                </CardHeader>
                <Image
                    alt="A plane image"
                    src={
                        mainImage?.airplane_image ?
                        mainImage?.airplane_image :
                        'https://via.placeholder.com/150'
                    }
                />
                <CardBody>
                    <Title>{callsign}</Title>
                    <Title>{baro_altitude}</Title>
                    <Title>{velocity}</Title>
                </CardBody>
                <Button disabled={!mainImage?.airplane_image} onClick={() => {
                    mutationRemove.mutate()
                }}>
                    Delete Image
                </Button>
            </Card>
        </Container>
    );
}