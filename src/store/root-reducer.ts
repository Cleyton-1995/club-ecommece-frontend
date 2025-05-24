import { combineReducers } from 'redux'
import userReducer from './toolkit/user/user.slice'
import cartReducer from './reducers/cart/cartReducer'
import categoryReducer from './reducers/category/categoryReducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReducer
