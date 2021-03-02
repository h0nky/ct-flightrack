import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useAirplaneImages(icao: string|number, enabled: boolean) {
    return useQuery('airplaneImages', async () => {
            try {
                const response = await axios.get(getConfigUrl(`airplaneImages/${icao}`));
                if (response.data) {
                    const result = response.data.map((item: string[]) => item[0]);
                    return result[0];
                }
            } catch (e) {
                console.error(e);
            }
        },
        {
            enabled: enabled,
        }
    );
}