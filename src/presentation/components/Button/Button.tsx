import React, { ButtonHTMLAttributes } from 'react'

import { ButtonStyled, IButtonStyledProps } from './Button.styles'

export const Button = (
  props: ButtonHTMLAttributes<Element> & IButtonStyledProps
) => {
  const { children } = props

  return <ButtonStyled {...props}>{children}</ButtonStyled>
}
