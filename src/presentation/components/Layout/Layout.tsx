import React, { ReactChild } from 'react'

interface OwnProps {
  children: ReactChild
}

export const Layout = ({ children }: OwnProps) => {
  return (
    <div className="p-8 w-full h-full min-h-screen bg-black">{children}</div>
  )
}
