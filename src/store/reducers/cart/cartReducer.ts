import { ICartProduct } from '../../../types/CartTypes'
import CartActionsTypes from './cartActionsTypes'

interface InitialState {
  isVisible: boolean

  products: ICartProduct[]
}

const InitialState: InitialState = {
  isVisible: false,
  products: []
}

export default function cartReducer(state = InitialState, action: any) {
  switch (action.type) {
    case CartActionsTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }

    case CartActionsTypes.addProductsToCart: {
      const product = action.payload

      const productIsAldearyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (productIsAldearyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }
    default:
      return { ...state }
  }
}
