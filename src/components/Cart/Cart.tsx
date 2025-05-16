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
import CartItem from '../CartItem/CartItem'

export default function Cart() {
  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />

      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para o checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}
