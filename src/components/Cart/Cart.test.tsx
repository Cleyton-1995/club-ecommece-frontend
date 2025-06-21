import userEvent from '@testing-library/user-event'
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
    getByText(/ir para o checkout/i)
  })

  it('should not show checkout button and should show an empty message if cart is empty', () => {
    const { getByText, queryByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: []
        }
      } as any
    })

    getByText(/seu carrinho está vazio!/i)
    expect(queryByText(/ir para o checkout/i)).toBeNull()
  })

  it('should increase product quantity on increase click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
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

    const increaseButton = getByLabelText(/increase quantity of boné/i)

    userEvent.click(increaseButton)

    getByText('3')
    getByText((content, element) => {
      const text = element.textContent?.replace(/\s+/g, '')
      return text === 'Total:R$300'
    })
  })

  it('should decrease product quantity on decrease click', () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
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

    const DecreaseButton = getByLabelText(/decrease quantity of boné/i)

    userEvent.click(DecreaseButton)

    getByText('1')
    getByText((content, element) => {
      const text = element.textContent?.replace(/\s+/g, '')
      return text === 'Total:R$100'
    })
  })

  it('should remove product on remove click', () => {
    const { getByLabelText, queryByText, getByText } = renderWithRedux(
      <Cart />,
      {
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
      }
    )

    const removeButton = getByLabelText(/remove boné/i)

    userEvent.click(removeButton)

    expect(queryByText(/boné/i)).toBeNull()
    getByText(/seu carrinho está vazio!/i)
  })
})
