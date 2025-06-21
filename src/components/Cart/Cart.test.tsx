import { renderWithRedux } from '../../helpers/test.helpers'
import Cart from './Cart'

describe('Cart', () => {
  it('should show correct cart products', () => {
    const { getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'Boné',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })

    getByText(/boné/i)
    getByText('100')
    getByText('2')
    getByText((content, element) => {
      const text = element.textContent?.replace(/\s+/g, '')
      return text === 'Total:R$200'
    })
  })
})
