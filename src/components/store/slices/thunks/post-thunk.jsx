import axios from 'axios'
import { getDataRequest, getDataSuccess, getDataFail} from '../../slices/posts'
export const getData = () => async (dispatch) => {
    try{
        dispatch(getDataRequest());
        const response = await axios.get("https://restcountries.com/v3.1/all");
        dispatch(getDataSuccess(response.data))
    } catch(error){
        dispatch(getDataFail(error.messages));
    }
}