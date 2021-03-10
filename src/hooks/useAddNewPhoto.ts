import { useMutation } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

interface IImage {
    username: string,
    airplane_icao: string|number,
    airplane_image: string
}

export default function useAddNewPhoto(image: IImage) {
    return useMutation<string, Error, IImage>(async () => {
            try {
                const response = await axios.post(getConfigUrl('jetPhotos'), image);
                return response.data;
            } catch (e) {
                console.error(e);   
            }
        }
    );
}