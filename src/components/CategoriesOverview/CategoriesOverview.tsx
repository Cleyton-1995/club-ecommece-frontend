import { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/categoryContext'
import { Container } from './CategoriesOverview.styles'
import CategoryOverview from '../CategoryOverview/CategoryOverview'

export default function CategoriesOverview() {
  const { categories, fetchCayegories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCayegories()
    }
  }, [])

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}
