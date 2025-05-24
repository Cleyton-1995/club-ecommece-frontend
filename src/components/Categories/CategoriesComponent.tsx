import { useEffect } from 'react'
import CategoryItemComponent from '../CategoryItem/CategoryItemComponent'
import { CategoriesContainer, CategoriesContent } from './Categories.styles'
import Loading from '../Loading/Loading'
import { fetchCayegories } from '../../store/toolkit/category/category.slice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redex-hooks'
export default function CategoriesComponent() {
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCayegories() as any)
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
