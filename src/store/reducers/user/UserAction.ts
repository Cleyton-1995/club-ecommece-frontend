import User from '../../../types/UserTypes'
import UserActionTypes from './useActionTypes'

interface LoginUserAction {
  type: typeof UserActionTypes.LOGIN
  payload: User
  [key: string]: any
}

export const loginUser = (payload: User): LoginUserAction => ({
  type: UserActionTypes.LOGIN,
  payload
})

interface LogoutUserAction {
  type: typeof UserActionTypes.LOGOUT
  [key: string]: any
}

export const logoutUser = (): LogoutUserAction => ({
  type: UserActionTypes.LOGOUT
})

export type UserActions = LoginUserAction | LogoutUserAction
