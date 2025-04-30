import { InputHTMLAttributes, ReactNode } from 'react'
import { CustomInputContainer } from './CustomInput.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export default function CustomInput({ hasError, ...rest }: CustomInputProps) {
  return <CustomInputContainer {...rest} hasError={hasError} />
}
