import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { UserConverter } from './convertes/firestore-convertes'
import Loading from './components/Loading/Loading'
import ExplorePage from './pages/ExplorePage/ExplorePage'
import CategoryDetailsPage from './pages/CategoryDetailsPage/CategoryDetailsPage'
import Cart from './components/Cart/Cart'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import AuthenticationGuard from './guards/Authentication.guard'
import PaymentConfirmation from './pages/PaymentConfirmation/PaymentConfirmation'
import { useDispatch } from 'react-redux'
import { loginUser, logoutUser } from './store/toolkit/user/user.slice'
import { useAppSelector } from './hooks/redex-hooks'
function App() {
  const [isInitializing, setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigninOut = isAuthenticated && !user

      if (isSigninOut) {
        dispatch(logoutUser())

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

        dispatch(loginUser(userFromFireStore))

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
