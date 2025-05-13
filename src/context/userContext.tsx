// import { User } from 'firebase/auth'
import { createContext, ReactNode, useState } from 'react'
import User from '../types/UserTypes'

interface IUserContext {
  currentUser: User
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

interface UserContextProviderProps {
  children: ReactNode
}

export default function UserContextProvider({
  children
}: UserContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  function loginUser(user) {
    setCurrentUser(user)
  }

  function logoutUser() {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}
