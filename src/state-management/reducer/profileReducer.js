import { PROFILE } from '../action/actionTypes'
const initialState = {
  // name: '',
  id: '',
  token: '',
  email: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      // const { id, token, email } = state
      // name = action.payload.name
      state.id = action.payload.userId
      state.token = action.payload.token
      state.email = action.payload.userEmail
      return state
    default:
      return state
  }
}
