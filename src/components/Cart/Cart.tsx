import { BsCartCheck } from 'react-icons/bs'
import CustomButton from '../CustomButton/CustomButton'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './Cart.styles'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export default function Cart() {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />

      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        <CartTotal>Total: R$ 100</CartTotal>

        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}
