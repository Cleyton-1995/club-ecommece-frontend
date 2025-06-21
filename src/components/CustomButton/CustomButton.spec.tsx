import { render } from '@testing-library/react'
import CustomButton from './CustomButton'

describe('Custom Button', () => {
  it('should render with correct children', () => {
    const { getByText } = render(<CustomButton>loren ipsum</CustomButton>)

    getByText('loren ipsum')
  })
})
