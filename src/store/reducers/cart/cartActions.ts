import ProductTypes from '../../../types/ProductsTypes'
import CartActionsTypes from './cartActionsTypes'

export const toggleCart = () => ({
  type: CartActionsTypes.toggleCart
})
export const addProductsToCart = (payload: ProductTypes) => ({
  type: CartActionsTypes.addProductsToCart,
  payload
})
export const removeProductFromCart = (payload: string) => ({
  type: CartActionsTypes.removeProductFromCart,
  payload
})
export const increaseCartProductQuantity = (payload: string) => ({
  type: CartActionsTypes.increaseCartProductQuantity,
  payload
})
export const decreaseCartProductQuantity = (payload: string) => ({
  type: CartActionsTypes.decreaseCartProductQuantity,
  payload
})
export const clearCartProducts = () => ({
  type: CartActionsTypes.clearCartProducts
})
