import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useFlights() {
    return useQuery('allFlights', async () => {
            try {
                const response = await axios.get(getConfigUrl('allFlights'));
                return response.data;
            } catch (e) {
                console.error(e);
            }
        },
        {
            refetchOnWindowFocus: false,
            refetchInterval: 20000,
        }
    );
}