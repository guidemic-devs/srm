import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import blogReducer from "./blogs.reducers";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    blog: blogReducer,
});

export default rootReducer;