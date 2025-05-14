import { useContext, useEffect } from 'react'
import { CategoryContext } from '../../context/categoryContext'
import { Container } from './CategoriesOverview.styles'

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
        <p key={category.id}>{category.displayName}</p>
      ))}
    </Container>
  )
}
