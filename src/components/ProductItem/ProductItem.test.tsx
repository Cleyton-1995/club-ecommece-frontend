import { renderWithRedux } from '../../helpers/test.helpers'
import ProductTypes from '../../types/ProductsTypes'
import ProductItem from './ProductItem'

describe('Product Item', () => {
  it('should show correct product', () => {
    const product: ProductTypes = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100
    }

    const { getByText } = renderWithRedux(<ProductItem product={product} />, {})

    getByText(/boné/i)
    getByText((content, element) => {
      const text = element.textContent?.replace(/\s+/g, '')
      return text === 'R$100'
    })
    getByText(/adiconar ao carrinho/i)
  })
})
