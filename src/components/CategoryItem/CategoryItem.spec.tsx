import { render } from '@testing-library/react'
import CategoryItemComponent from './CategoryItemComponent'
import CategoryTypes from '../../types/CategoryTypes'
import { BrowserRouter } from 'react-router-dom'

describe('Category Item', () => {
  it('should render category correctly', () => {
    const category: CategoryTypes = {
      id: '1',
      displayName: 'Lorem Ipsum',
      imageUrl: 'image_url',
      name: 'lorem-ipsum',
      products: []
    }
    const { getByText } = render(
      <BrowserRouter>
        <CategoryItemComponent category={category} />
      </BrowserRouter>
    )

    getByText('Lorem Ipsum')
    getByText('Explorar')
  })
})
