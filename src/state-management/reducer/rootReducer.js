import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { profileReducer } from "./profileReducer";
import { changeState } from "./sidebarReducer";
export default combineReducers({
    counState:changeState,
    profileState:profileReducer,
    postsState:postsReducer
})