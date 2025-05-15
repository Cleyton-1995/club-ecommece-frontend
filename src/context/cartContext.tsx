import { createContext, ReactNode, useState } from 'react'
import { ICartProduct } from '../types/CartTypes'

interface ICartContext {
  isVisible: boolean
  products: ICartProduct[]
  toggleCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

export default function CartContextProvider({
  children
}: CartContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<ICartProduct[]>([])

  function toggleCart() {
    setIsVisible((prevSate) => !prevSate)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
