import { useNavigate } from 'react-router-dom'
import CategoryTypes from '../../types/CategoryTypes'
import { CategoryItemContainer, CategoryName } from './CategoryItem.styles'

interface CategoryItemProps {
  category: CategoryTypes
}

export default function CategoryItemComponent({ category }: CategoryItemProps) {
  const navigate = useNavigate()

  function handleExploreClick() {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
