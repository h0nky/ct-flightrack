import { useLocation } from "react-router";
import useJetPhotos from "../hooks/useJetPhotos";
import useAirplaneImages from "../hooks/useAirplaneImages";
import styled from "styled-components";
import { Flight, JetPhotos } from "../api-interfaces";
import useAddNewPhoto from "../hooks/useAddNewPhoto";

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
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    color: #080E14;
`;

const Image = styled.img``;

const CardBody = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
`;

export const AirplaneDetails = () => {
    const { state: [ icao24, callsign, originCountry, baro_altitude, velocity ] } = useLocation<Flight>();
    const { data, isLoading } = useJetPhotos();

    const isImageRequired = () => {
        if (isLoading) return false
        const result = data.find((item: JetPhotos) => item.airplane_icao === icao24);
        return !result
    }

    const getImage = () => {
        const result = data?.find((item: JetPhotos) => item.airplane_icao === icao24);
        if (result) return <Image src={result.airplane_image} />
        return <Image src='https://via.placeholder.com/150' />
    }

    const { data: airplaneImage } = useAirplaneImages(icao24, isImageRequired());

    const mutation = useAddNewPhoto({ username: 'jenya golovnov', airplane_icao: icao24, airplane_image: airplaneImage });

    if (mutation.isIdle) mutation.mutate();

    return (
        <Container>
            <Card>
                <CardBody>
                    <Title>{callsign}</Title>
                    <Title>{originCountry}</Title>
                </CardBody>
                {getImage()}
                <CardBody>
                    <Title>{baro_altitude}</Title>
                    <Title>{velocity}</Title>
                </CardBody>
            </Card>
        </Container>
    );
}