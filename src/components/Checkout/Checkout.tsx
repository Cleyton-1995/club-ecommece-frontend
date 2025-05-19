import { useContext } from 'react'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './Checkout.styles'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { BsBagCheck } from 'react-icons/bs'

export default function Checkout() {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Tota: R$ {productsTotalPrice}</CheckoutTotal>

          <CustomButton startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  )
}
