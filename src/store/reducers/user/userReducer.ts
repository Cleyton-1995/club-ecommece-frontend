import User from '../../../types/UserTypes'
import UserActionTypes from './useActionTypes'
import { UserActions } from './UserAction'

interface InitialState {
  currentUser: User | null
  isAuthenticated: boolean
}

const InitialState: InitialState = {
  currentUser: null,
  isAuthenticated: false
}
export default function userReducer(
  state = InitialState,
  action: UserActions
): InitialState {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload, isAuthenticated: true }
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}
