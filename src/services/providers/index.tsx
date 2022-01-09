import React, { ReactChild } from 'react'

interface OwnProps {
  children: ReactChild
}

export const Providers = ({ children }: OwnProps) => {
  return <>{children}</>
}
