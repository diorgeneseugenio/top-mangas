import React, { ReactChild } from 'react'

import { ButtonStyled, IButtonStyledProps } from './Button.styles'

interface OwnProps extends IButtonStyledProps {
  children: ReactChild
}

export const Button = (props: OwnProps) => {
  const { children } = props

  return <ButtonStyled {...props}>{children}</ButtonStyled>
}
