import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useAirplaneImages(icao: string|number, enabled: boolean) {
    const { data } = useQuery('airplaneImages', async () => {
            const response = await axios.get(getConfigUrl(`airplaneImages/${icao}`));
            return response.data;
        },
        {
            enabled: enabled,
            onSuccess: (): void => console.log('AIRPLANE IMAGES', data)
        }
    );
}