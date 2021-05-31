import axiosInstance from "../helpers/axios";
import { blogConstants } from "./constants";

export const getAllBlogs = () => {
    return async dispatch => {
        dispatch({
            type: blogConstants.ALL_BLOGS_REQUEST
        });
        const res = await axiosInstance.get("blog/getallblogs");

        if(res.status === 200){
            const {blogList} = res.data;
            dispatch({
                type:blogConstants.ALL_BLOGS_SUCCESS,
                payload: {blogList: blogList},
            })
        }else{
            dispatch({type: blogConstants.ALL_BLOGS_FAILURE, payload: {error : res.data.error}});
        }
    }
}

export const getBlog = () => {
    return async dispatch => {
        dispatch({
            type: blogConstants.BLOG_REQUEST
        });
        const res = await axiosInstance.get("blog/getblog");

        if(res.status === 200){
            const {blog} = res.data;
            dispatch({
                type:blogConstants.BLOG_SUCCESS,
                payload: {blog: blog},
            })
        }else{
            dispatch({type: blogConstants.BLOG_FAILURE, payload: {error : res.data.error}});
        }
    }
}

export const addBlog = (form) => {
    return async dispatch => {
        dispatch({type:blogConstants.ADD_BLOG_REQUEST});
        const res = await axiosInstance.post('/blog/create', form);
        if(res.status === 201){
            dispatch({
                type:blogConstants.ADD_BLOG_SUCCESS,
                payload:{blog:res.data.blog},
            });
        }else{
            dispatch({
                type: blogConstants.ADD_BLOG_FAILURE,
                payload: {error:res.data.error}
            })
        }
    }
}