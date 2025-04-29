import CategoryTypes from '../../types/CategoryTypes'
import { CategoryItemContainer, CategoryName } from './CategoryItem.styles'

interface CategoryItemProps {
  category: CategoryTypes
}

export default function CategoryItemComponent({ category }: CategoryItemProps) {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
