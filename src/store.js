import { createStore } from 'redux'
import rootReducer from './state-management/reducer/rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
const persistConfig = {
  key: 'root',
  storage,
 }
const persistedReducer = persistReducer(persistConfig, rootReducer)
let Store = createStore(persistedReducer)
let persistor = persistStore(Store)
export { Store, persistor }

