import axios from 'axios';
import { getPlants } from '../slices/plantsSlices';


export const getAllPlants = () => async (dispatch) => {
    try {
        const { data } = await axios.get(``);
        dispatch(getPlants(data));
    } catch (error) {
        console.log(error);
    }
}