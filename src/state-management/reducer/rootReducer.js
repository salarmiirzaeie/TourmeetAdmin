import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { changeState } from "./sidebarReducer";
export default combineReducers({
    counState:changeState,
    profileState:profileReducer
})