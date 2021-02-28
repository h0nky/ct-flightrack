import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useFlights() {
    return useQuery('allFlights', async () => {
            const response = await axios.get(getConfigUrl('allFlights'));
            return response.data;
        },
        {
            refetchInterval: 20000,
        }
    );
}