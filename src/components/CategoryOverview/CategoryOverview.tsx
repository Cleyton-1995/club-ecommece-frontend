import CategoryTypes from '../../types/CategoryTypes'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './CategoryOverview.styles'

interface CategoryOverviewProps {
  category: CategoryTypes
}

export default function CategoryOverview({ category }: CategoryOverviewProps) {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}
