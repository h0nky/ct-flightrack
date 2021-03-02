import { useQuery } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useJetPhotos() {
    return useQuery('jetPhotos', async () => {
            try {
                const response = await axios.get(getConfigUrl('jetPhotos'));
                return response.data;

            } catch (e) {
                console.error(e);
            }
        }
    );
}