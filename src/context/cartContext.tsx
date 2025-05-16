import { createContext, ReactNode, useState } from 'react'
import { ICartProduct } from '../types/CartTypes'
import ProductTypes from '../types/ProductsTypes'

interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toggleCart: () => void
  addProductsToCart: (product: ProductTypes) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductsToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {}
})

export default function CartContextProvider({
  children
}: CartContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProduts] = useState<ICartProduct[]>([])

  function toggleCart() {
    setIsVisible((prevSate) => !prevSate)
  }

  function addProductsToCart(product: ProductTypes) {
    const productIsAldearyInCart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAldearyInCart) {
      return setProduts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProduts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  function removeProductFromCart(productId: string) {
    setProduts((products) =>
      products.filter((product) => product.id !== productId)
    )
  }

  function increaseProductQuantity(productId: string) {
    setProduts((products) =>
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  function decreaseProductQuantity(productId: string) {
    setProduts((products) =>
      products
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductsToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}
