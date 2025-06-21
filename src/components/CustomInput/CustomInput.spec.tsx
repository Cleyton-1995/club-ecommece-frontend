import { render } from '@testing-library/react'
import CustomInput from './CustomInput'
import Colors from '../../theme/theme.colors'

describe('Custom Input', () => {
  it('should render with error if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Loren Ipsum" hasError={true} />
    )

    const input = getByPlaceholderText('Loren Ipsum')

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` })
  })

  it('should render without error if hasError is false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Loren Ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('Loren Ipsum')

    expect(input).toHaveStyle({ border: 'none' })
  })
})
