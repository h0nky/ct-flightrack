import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useJetPhotos() {
    return useQuery('jetPhotos', async () => {
            const response = await axios.get(getConfigUrl('jetPhotos'));
            return response.data;
        },
        {
            refetchOnWindowFocus: false
        }
    );
}