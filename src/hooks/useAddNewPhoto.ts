import { useMutation } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useAddNewPhoto(icao: string) {
    return useMutation('airplaneImages', async () => {
            const response = await axios.post(getConfigUrl('jetPhotos'));
            return response.data;
        }
    );
}