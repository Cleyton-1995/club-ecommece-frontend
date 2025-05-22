import { BsCartCheck } from 'react-icons/bs'
import CustomButton from '../CustomButton/CustomButton'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './Cart.styles'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redex-hooks'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../store/reducers/cart/cartActions'
import {
  selectProductsCount,
  selectProductsTotalPrice
} from '../../store/reducers/cart/cartSelector'

export default function Cart() {
  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsCount = useAppSelector(selectProductsCount)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  function handleGoToCheckoutClick() {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  function handleEscapeAreaClick() {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />

      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            onClick={handleGoToCheckoutClick}
            startIcon={<BsCartCheck />}>
            Ir para o checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}
