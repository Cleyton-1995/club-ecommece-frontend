import { useEffect, useState } from 'react'
import CategoryTypes from '../../types/CategoryTypes'
import env from '../../config/env.config'
import axios from 'axios'
import CategoryItemComponent from '../CategoryItem/CategoryItemComponent'
import { CategoriesContainer, CategoriesContent } from './Categories.styles'
export default function CategoriesComponent() {
  const [categories, setCategories] = useState<CategoryTypes[]>([])

  console.log(categories)

  async function fetchCayegories() {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
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
