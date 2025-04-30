import { useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
import { ShoppingCart } from 'lucide-react'

export default function HeaderComponent() {
  const navigate = useNavigate()

  function handleLoginClick() {
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <ShoppingCart size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
