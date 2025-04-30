import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { CustomButtonContainer, IconContainer } from './CustomButton.styles'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  startIcon?: React.ReactElement
}

function CustomButton({ children, startIcon, ...rest }: CustomButtonProps) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
