import { createContext, ReactNode, useState } from 'react'
import CategoryTypes from '../types/CategoryTypes'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../convertes/firestore-convertes'

interface ICategoryContext {
  categories: CategoryTypes[]
  fetchCayegories: () => Promise<void>
  isLoading: boolean
}

interface CategoryContextProviderProps {
  children: ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCayegories: () => Promise.resolve(),
  isLoading: false
})

export default function CategoryContextProvider({
  children
}: CategoryContextProviderProps) {
  const [categories, setCategories] = useState<CategoryTypes[]>([])

  const [isLoading, setIsLoading] = useState(false)

  async function fetchCayegories() {
    try {
      setIsLoading(true)

      const categoriesFromFirestore: CategoryTypes[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCayegories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  )
}
