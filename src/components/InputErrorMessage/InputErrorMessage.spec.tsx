import { render } from '@testing-library/react'
import InputErrorMessage from './InputErrorMessage'
import Colors from '../../theme/theme.colors'

describe('Custom Button', () => {
  it('should show message with error color', () => {
    const { getByText } = render(
      <InputErrorMessage>Loren Ipsum</InputErrorMessage>
    )

    const message = getByText('Loren Ipsum')

    expect(message).toHaveStyle({ color: Colors.error })
  })
})
