import { renderWithRedux } from '../../helpers/test.helpers'
import { ICartProduct } from '../../types/CartTypes'
import CartItem from './CartItem'
describe('Cart Item', () => {
  it('should show correct cart item', () => {
    const cartItem: ICartProduct = {
      id: '1',
      imageUrl: 'image_url',
      name: 'Boné',
      price: 100,
      quantity: 1
    }

    const { getByText, getByLabelText } = renderWithRedux(
      <CartItem product={cartItem} />,
      {}
    )

    getByText(/boné/i)
    getByText('100')
    getByText('1')
    getByLabelText(/increase quantity of boné/i)
    getByLabelText(/decrease quantity of boné/i)
    getByLabelText(/remove boné/i)
  })
})
