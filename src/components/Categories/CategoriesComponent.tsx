import { useEffect, useState } from 'react'
import CategoryTypes from '../../types/CategoryTypes'
import CategoryItemComponent from '../CategoryItem/CategoryItemComponent'
import { CategoriesContainer, CategoriesContent } from './Categories.styles'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../convertes/firestore-convertes'
export default function CategoriesComponent() {
  const [categories, setCategories] = useState<CategoryTypes[]>([])

  async function fetchCayegories() {
    try {
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
    }
  }

  useEffect(() => {
    fetchCayegories()
  }, [])
  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItemComponent category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}
