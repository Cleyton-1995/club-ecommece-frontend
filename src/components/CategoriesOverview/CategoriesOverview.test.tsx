import * as firestore from 'firebase/firestore'
import { renderWithRedux } from '../../helpers/test.helpers'
import CategoryTypes from '../../types/CategoryTypes'
import CategoriesOverview from './CategoriesOverview'

jest.mock('firebase/firestore')

describe('Categories Overview', () => {
  it('should fetch and show categories', async () => {
    const mockedFirestore = firestore as any

    mockedFirestore.getDocs.mockImplementation(async () => [
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
    ])

    mockedFirestore.collection.mockImplementation(() => ({
      withConverter: () => {}
    }))

    const { findByText, getByText } = renderWithRedux(
      <CategoriesOverview />,
      {}
    )

    await findByText(/boné/i)
    getByText('Lorem Ipsum')
    await findByText(/R\$\s*100/i)
  })
})
