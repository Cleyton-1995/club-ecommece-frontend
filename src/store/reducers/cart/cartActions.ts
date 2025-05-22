import ProductTypes from '../../../types/ProductsTypes'
import CartActionsTypes from './cartActionsTypes'

export const toggleCart = () => ({
  type: CartActionsTypes.toggleCart
})
export const addProductsToCart = (payload: ProductTypes) => ({
  type: CartActionsTypes.addProductsToCart,
  payload
})
