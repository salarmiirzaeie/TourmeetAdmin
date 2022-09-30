import {POSTS} from "./actionTypes"
export const getposts=(rest)=>({
    type:POSTS,
    payload:rest
})