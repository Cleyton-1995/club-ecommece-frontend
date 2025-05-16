import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
import { BsCart3 } from 'react-icons/bs'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { CartContext } from '../../context/cartContext'

export default function HeaderComponent() {
  const navigate = useNavigate()

  const { toggleCart, productsCount } = useContext(CartContext)
  const { isAuthenticated } = useContext(UserContext)

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
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
