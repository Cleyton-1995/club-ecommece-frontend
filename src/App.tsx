import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { UserContext } from './context/userContext'
import { useContext, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { UserConverter } from './convertes/firestore-convertes'
import Loading from './components/Loading/Loading'
import ExplorePage from './pages/ExplorePage/ExplorePage'
function App() {
  const [isInitializing, setIsInitializing] = useState(true)

  const { loginUser, logoutUser, isAuthenticated } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user

    if (isSigninOut) {
      logoutUser()
      return setIsInitializing(false)
    }

    const isSigninIn = !isAuthenticated && user

    if (isSigninIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(UserConverter),
          where('id', '==', user.uid)
        )
      )

      const userFromFireStore = querySnapshot.docs[0]?.data()

      loginUser(userFromFireStore)
      return setIsInitializing(false)
    }

    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
