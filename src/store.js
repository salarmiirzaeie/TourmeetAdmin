import { createStore } from 'redux'
import rootReducer from './state-management/reducer/rootReducer'

const store = createStore(rootReducer)
export default store
