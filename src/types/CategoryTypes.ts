import ProductTypes from './ProductsTypes'

interface CategoryTypes {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: ProductTypes[]
}

export default CategoryTypes
