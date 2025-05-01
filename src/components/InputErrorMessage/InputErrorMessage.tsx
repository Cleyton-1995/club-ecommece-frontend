import { ReactNode } from 'react'
import { InputErrorMessageContainer } from './InputErrorMessage.styles'

interface InputErrorMessageProps {
  children: ReactNode
}

export default function InputErrorMessage({
  children
}: InputErrorMessageProps) {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}
