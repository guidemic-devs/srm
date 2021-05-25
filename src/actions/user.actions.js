import axiosInstance from "../helpers/axios";
import { userConstants } from "./constants";

export const signup = (user) => {

    return async(dispatch) => {

        dispatch({type:userConstants.USER_REGISTER_REQUEST})
        const res = await axiosInstance.post('/user/signup', {
            ...user
        }); 
        console.log(res);
        if(res.status===201){
            const {message} = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload:{message} })      
        }
        if(res.status === 400){
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload:{ error: res.data.error}
            })
        }
    }
}
