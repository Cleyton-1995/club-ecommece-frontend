import { useEffect } from 'react'
import { Container } from './CategoriesOverview.styles'
import CategoryOverview from '../CategoryOverview/CategoryOverview'
import Loading from '../Loading/Loading'
import { useAppSelector } from '../../hooks/redex-hooks'
import { useDispatch } from 'react-redux'
import { fetchCayegories } from '../../store/reducers/category/categoryAction'

export default function CategoriesOverview() {
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCayegories() as any)
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}
