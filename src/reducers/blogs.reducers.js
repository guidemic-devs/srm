import { blogConstants } from "../actions/constants";

const initState = {
    blogs:[],
    blog:"",
    loading:false,
    error:null,
};

const blogFinder = (id, blogList) => {
    for(let blog of blogList){
        if(id == blog._id){
            return blog;
        }
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case blogConstants.ALL_BLOGS_REQUEST:
            state = {
                ...state,
                laoding:true,
            }
            break;
        case blogConstants.ALL_BLOGS_SUCCESS:
            state = {
                ...state,
                blogs: action.payload.blogList,
            }
            break;
            case blogConstants.ALL_BLOGS_FAILURE: 
            state = {
                ...initState,
                error:action.payload.error
            }
            break;
            case blogConstants.BLOG_REQUEST:
            state = {
                ...state,
                laoding:true,
            }
            break;
        case blogConstants.BLOG_SUCCESS:
            const blogId = action.payload.blog._id;
            const blogList = state.blogs;
            const blog = blogFinder(blogId, blogList);
            state = {
                ...state,
                blog: blog,
            }
            break;
            case blogConstants.BLOG_FAILURE: 
            state = {
                ...initState,
                error:action.payload.error
            }
            break;
            case blogConstants.ADD_BLOG_REQUEST:
                state = {
                    ...state,
                    loading:true,
                }
                break;
                case blogConstants.ADD_BLOG_SUCCESS:
                    const newBlog = action.payload.blog;
                    const allBlogs = state.blogs;
                    const updatedBlogs = allBlogs.push(newBlog);
                    state = {
                        ...state,
                        blogs: updatedBlogs,
                    }
                    break;
            case blogConstants.ADD_BLOG_FAILURE:
                state = {
                    ...initState,
                    error:action.payload.error,
                }
    }

    return state;
}