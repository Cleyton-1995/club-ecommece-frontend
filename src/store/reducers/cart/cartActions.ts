import ProductTypes from '../../../types/ProductsTypes'
import CartActionsTypes from './cartActionsTypes'

interface ToggleCartTypes {
  type: typeof CartActionsTypes.toggleCart
  [key: string]: any
}

export const toggleCart = (): ToggleCartTypes => ({
  type: CartActionsTypes.toggleCart
})

interface AddProductsToCartAction {
  type: typeof CartActionsTypes.addProductsToCart
  payload: ProductTypes
  [key: string]: any
}

export const addProductsToCart = (
  payload: ProductTypes
): AddProductsToCartAction => ({
  type: CartActionsTypes.addProductsToCart,
  payload
})

interface RemoveProductFromCartAction {
  type: typeof CartActionsTypes.removeProductFromCart
  payload: string
  [key: string]: any
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionsTypes.removeProductFromCart,
  payload
})

interface IncreaseCartProductQuantityAction {
  type: typeof CartActionsTypes.increaseCartProductQuantity
  payload: string
  [key: string]: any
}

export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantityAction => ({
  type: CartActionsTypes.increaseCartProductQuantity,
  payload
})

interface DecreaseCartProductQuantityAction {
  type: typeof CartActionsTypes.decreaseCartProductQuantity
  payload: string
  [key: string]: any
}
export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantityAction => ({
  type: CartActionsTypes.decreaseCartProductQuantity,
  payload
})

interface ClearCartProductsAction {
  type: typeof CartActionsTypes.clearCartProducts
  [key: string]: any
}
export const clearCartProducts = (): ClearCartProductsAction => ({
  type: CartActionsTypes.clearCartProducts
})

export type CartActions =
  | ToggleCartTypes
  | AddProductsToCartAction
  | RemoveProductFromCartAction
  | IncreaseCartProductQuantityAction
  | DecreaseCartProductQuantityAction
  | ClearCartProductsAction
