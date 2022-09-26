import { DECREMENT } from '../action/actionTypes'
const initialState = {
  sidebarShow: true,
}

export const changeState = (state = initialState, action ) => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
