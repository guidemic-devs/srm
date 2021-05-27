import { blogConstants, categoryConstants } from "../actions/constants";

const initState = {
    blogs:[],
    loading:false,
    error:null,
};

export default (state = initState, action) => {
    switch(action.type){
        case blogConstants.ALL_BLOGS_SUCCESS:
            state = {
                ...state,
                blogs: action.payload.blogs,
            }
            break;
    }

    return state;
}