import React, { ReactNode } from 'react'

interface OwnProps {
  children: ReactNode
}

export const Layout = ({ children }: OwnProps) => {
  return (
    <div className="p-8 w-full h-full min-h-screen bg-black">{children}</div>
  )
}
