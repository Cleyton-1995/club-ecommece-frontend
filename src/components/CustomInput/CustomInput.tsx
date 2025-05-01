import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './CustomInput.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />
  }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
