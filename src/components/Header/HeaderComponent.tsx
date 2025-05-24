import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { logoutUser } from '../../store/toolkit/user/user.slice'
import { toggleCart } from '../../store/reducers/cart/cartActions'
import { useAppSelector } from '../../hooks/redex-hooks'
import { selectProductsCount } from '../../store/reducers/cart/cartSelector'

export default function HeaderComponent() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const productsCount = useAppSelector(selectProductsCount)

  function handleLogoClick() {
    navigate('/')
  }

  function handleLoginClick() {
    navigate('/login')
  }

  function handleLSignUpClick() {
    navigate('/sign-up')
  }

  function handleExploreClick() {
    navigate('/explore')
  }

  function handleSignOutClick() {
    dispatch(logoutUser())
    signOut(auth)
  }

  function handleCartClick() {
    dispatch(toggleCart())
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleLSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
