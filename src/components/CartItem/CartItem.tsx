import { useContext } from 'react'
import { ICartProduct } from '../../types/CartTypes'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './CartItem.styles'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../context/cartContext'

interface CartItemProps {
  product: ICartProduct
}

export default function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart } = useContext(CartContext)

  function handleRemoveClick() {
    removeProductFromCart(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}
