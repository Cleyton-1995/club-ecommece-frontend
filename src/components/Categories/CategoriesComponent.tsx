import { useContext, useEffect } from 'react'
import CategoryItemComponent from '../CategoryItem/CategoryItemComponent'
import { CategoriesContainer, CategoriesContent } from './Categories.styles'
import { CategoryContext } from '../../context/categoryContext'
import Loading from '../Loading/Loading'
export default function CategoriesComponent() {
  const { categories, fetchCayegories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    fetchCayegories()
  }, [])
  return (
    <CategoriesContainer>
      {isLoading && <Loading />}

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
