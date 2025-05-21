import User from '../../../types/UserTypes'
import UserActionTypes from './useActionTypes'

export const loginUser = (payload: User) => ({
  type: UserActionTypes.LOGIN,
  payload
})

export const logout = () => ({ type: UserActionTypes.LOGOUT })
