import { POSTS } from '../action/actionTypes'
const initialState = []

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:

      state=action.payload

      return state
    default:
      return state
  }
}
