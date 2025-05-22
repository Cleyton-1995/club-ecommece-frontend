import { useState } from 'react'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './Checkout.styles'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { BsBagCheck } from 'react-icons/bs'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { useAppSelector } from '../../hooks/redex-hooks'
import { useSelector } from 'react-redux'
import { selectProductsTotalPrice } from '../../store/reducers/cart/cartSelector'

export default function Checkout() {
  const { products } = useAppSelector((state) => state.cartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  const [isLoaging, setIsLoaging] = useState(false)

  async function handleFinishPurchaseClick() {
    try {
      setIsLoaging(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoaging(false)
    }
  }

  return (
    <CheckoutContainer>
      {isLoaging && <Loading />}
      <CheckoutTitle>Checkout</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Tota: R$ {productsTotalPrice}</CheckoutTotal>

          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchaseClick}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  )
}
