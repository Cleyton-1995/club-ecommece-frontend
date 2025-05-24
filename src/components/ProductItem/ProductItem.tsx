import { BsCartPlus } from 'react-icons/bs'
import ProductTypes from '../../types/ProductsTypes'
import CustomButton from '../CustomButton/CustomButton'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './ProductItem.styles'
import { useDispatch } from 'react-redux'
import { addProductsToCart } from '../../store/toolkit/cart/cart.slice'

interface ProductItemProps {
  product: ProductTypes
}

export default function ProductItem({ product }: ProductItemProps) {
  const dispatch = useDispatch()

  function handleAddToCartClick() {
    dispatch(addProductsToCart(product))
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adiconar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
