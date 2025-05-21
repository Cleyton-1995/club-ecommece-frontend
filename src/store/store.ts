import { applyMiddleware, createStore } from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger))

export type RootState = ReturnType<typeof store.getState>

export default store
