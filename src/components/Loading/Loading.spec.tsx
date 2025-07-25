import { render } from '@testing-library/react'
import Loading from './Loading'

describe('Loading', () => {
  it('should show a message if there is one', () => {
    const { getByText } = render(<Loading message="Aguarde..." />)

    getByText('Aguarde...')
  })
})
