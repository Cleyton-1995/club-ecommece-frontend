import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import CategoryTypes from '../../types/CategoryTypes'
import CategoryDetails from './CategoryDetails'
jest.mock('firebase/firestore')

describe('Category Details', () => {
  it('should fetch and show categories and its products', async () => {
    const mockedFirestore = firestore as any

    mockedFirestore.getDocs.mockImplementation(async () => ({
      docs: [
        {
          data(): CategoryTypes {
            return {
              id: '1',
              displayName: 'Lorem Ipsum',
              imageUrl: 'image_url',
              name: 'lorem-ipsum',
              products: [
                { id: '1', name: 'Boné', price: 100, imageUrl: 'image_url' }
              ]
            }
          }
        }
      ]
    }))

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    mockedFirestore.query.mockImplementation(() => {})
    mockedFirestore.where.mockImplementation(() => {})

    const { findByText, getByText } = renderWithRedux(
      <CategoryDetails categoryId="any_id" />,
      {}
    )

    await findByText('Explorar Lorem Ipsum')
    getByText(/boné/i)
    await findByText(/R\$\s*100/i)
  })
})
