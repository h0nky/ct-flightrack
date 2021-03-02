import { useMutation } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useAddNewPhoto(image: { username: string, airplane_icao: string|number, airplane_image: string }) {
    return useMutation(async () => {
            try {
                const response = await axios.post(getConfigUrl('jetPhotos'), image);
                return response.data;
            } catch (e) {
                console.error(e);   
            }
        }
    );
}