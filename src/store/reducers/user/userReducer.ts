import User from '../../../types/UserTypes'
import UserActionTypes from './useActionTypes'

interface InitialState {
  currentUser: User | null
  isAuthenticated: boolean
}

const InitialState: InitialState = {
  currentUser: null,
  isAuthenticated: false
}
export default function userReducer(state = InitialState, action: any) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currenUser: action.payload, isAuthenticated: true }
    case UserActionTypes.LOGOUT:
      return { ...state, currenUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}
