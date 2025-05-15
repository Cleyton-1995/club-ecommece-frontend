import { createContext, ReactNode, useState } from 'react'
import { ICartProduct } from '../types/CartTypes'
import ProductTypes from '../types/ProductsTypes'

interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toggleCart: () => void
  addProductsToCart: (product: ProductTypes) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductsToCart: () => {}
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
    setProduts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductsToCart }}>
      {children}
    </CartContext.Provider>
  )
}
