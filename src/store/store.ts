import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'

import rootReducer from './root-reducer'
import { thunk } from 'redux-thunk'

const persistCofig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRoodReducer: typeof rootReducer = persistReducer(
  persistCofig,
  rootReducer
)

export const store = createStore(
  persistedRoodReducer,
  applyMiddleware(thunk, logger)
)
export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
