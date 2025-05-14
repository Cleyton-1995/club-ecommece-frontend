import ProductTypes from '../../types/ProductsTypes'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './ProductItem.styles'

interface ProductItemProps {
  product: ProductTypes
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
