import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
import { ShoppingCart } from 'lucide-react'

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar Conta</HeaderItem>
        <HeaderItem>
          <ShoppingCart size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}
