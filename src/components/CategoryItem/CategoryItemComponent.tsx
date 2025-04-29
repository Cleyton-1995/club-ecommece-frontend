import CategoryTypes from '../../types/CategoryTypes'
import './CategoryItemStyles.css'

interface CategoryItemProps {
  category: CategoryTypes
}

export default function CategoryItemComponent({ category }: CategoryItemProps) {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
      er
    </div>
  )
}
