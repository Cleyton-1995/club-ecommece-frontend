const CartActionsTypes = {
  toggleCart: 'cart/toggle' as const,
  addProductsToCart: 'cart/addProducts' as const,
  removeProductFromCart: 'cart/removeProduct' as const,
  increaseCartProductQuantity: 'cart/increaseProductQuantity' as const,
  decreaseCartProductQuantity: 'cart/decreaseProductQuantity' as const,
  clearCartProducts: 'cart/clearProducts' as const
}

export default CartActionsTypes
