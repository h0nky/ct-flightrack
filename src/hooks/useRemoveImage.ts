import { useMutation } from "react-query";
import axios from "axios";
import { getConfigUrl } from "../api-config";

export default function useRemoveImage(imageId: string|undefined) {
    return useMutation(async () => {
            try {
                const response = await axios.delete(getConfigUrl(`jetPhotos/${imageId}`));
                return response.data;

            } catch (e) {
                console.error(e);
            }
        }
    );
}