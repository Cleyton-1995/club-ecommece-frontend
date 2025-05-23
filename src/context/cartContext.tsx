import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { ICartProduct } from '../types/CartTypes'
import ProductTypes from '../types/ProductsTypes'

interface ICartContext {
  isVisible: boolean
  productsTotalPrice: number
  productsCount: number
  products: ICartProduct[]
  toggleCart: () => void
  addProductsToCart: (product: ProductTypes) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
  clearProducts: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  productsTotalPrice: 0,
  productsCount: 0,
  products: [],
  toggleCart: () => {},
  addProductsToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
  clearProducts: () => {}
})

export default function CartContextProvider({
  children
}: CartContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProduts] = useState<ICartProduct[]>([])

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('cartProducts')!
    )

    setProduts(productsFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productsCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])

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

  function clearProducts() {
    setProduts([])
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        productsTotalPrice,
        productsCount,
        clearProducts,
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
