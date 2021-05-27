import axiosInstance from "../helpers/axios";
import { blogConstants } from "./constants";

export const getAllBlogs = () => {
    return async dispatch => {
        dispatch({
            type: blogConstants.ALL_BLOGS_REQUEST
        });
        const res = await axiosInstance.get("blog/getblog");

        if(res.status === 200){
            const {blogList} = res.data;
            dispatch({
                type:blogConstants.ALL_BLOGS_SUCCESS,
                payload: {blogs: blogList},
            })
        }else{
            dispatch({type: blogConstants.ALL_BLOGS_FAILURE, payload: {error : res.data.error}});
        }
    }
}