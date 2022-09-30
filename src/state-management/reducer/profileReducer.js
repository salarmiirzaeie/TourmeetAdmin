import { PROFILE } from '../action/actionTypes'
const initialState = {
 
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:

      state=action.payload

      return state
    default:
      return state
  }
}
