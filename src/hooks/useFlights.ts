import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useFlights() {
    return useQuery('allFlights', async () => {
            const response = await axios.get(getConfigUrl('allFlights'));
            return response.data;
        },
        {
            refetchOnWindowFocus: false,
            refetchInterval: 20000,
            onError: (e) => console.error(e)
        }
    );
}