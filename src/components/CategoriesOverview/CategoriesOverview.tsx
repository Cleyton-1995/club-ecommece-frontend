import { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/categoryContext'
import { Container } from './CategoriesOverview.styles'
import CategoryOverview from '../CategoryOverview/CategoryOverview'
import Loading from '../Loading/Loading'

export default function CategoriesOverview() {
  const { categories, fetchCayegories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCayegories()
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
