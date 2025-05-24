import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartProduct } from '../../../types/CartTypes'
import ProductTypes from '../../../types/ProductsTypes'

interface InitialState {
  isVisible: boolean
  products: ICartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible
    },
    addProductsToCart: (state, action: PayloadAction<ProductTypes>) => {
      const product = action.payload

      const productIsAldearyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (productIsAldearyInCart) {
        state.products = state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

        return
      }

      state.products = [...state.products, { ...product, quantity: 1 }]
    },

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },

    increaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    },

    decreaseCartProductQuantity: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    },

    clearCartProducts: (state) => {
      state.products = []
    }
  }
})

export const {
  toggleCart,
  addProductsToCart,
  removeProductFromCart,
  increaseCartProductQuantity,
  decreaseCartProductQuantity,
  clearCartProducts
} = cartSlice.actions

export default cartSlice.reducer
