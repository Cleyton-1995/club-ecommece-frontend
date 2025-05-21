import User from '../../types/UserTypes'

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
    case 'LOGIN_USER':
      return { ...state, currenUser: action.payload, isAuthenticated: true }
    case 'LOGOUT_USER':
      return { ...state, currenUser: null, isAuthenticated: false }
    default:
      return { ...state }
  }
}
