import CategoryTypes from '../../types/CategoryTypes'
import ProductItem from '../ProductItem/ProductItem'
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

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}
