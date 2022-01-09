import React, { ReactNode } from 'react'

import { ThemeOptions, useTheme } from '@/services/state/client/hooks/useTheme'

interface OwnProps {
  children: ReactNode
}

export const Layout = ({ children }: OwnProps) => {
  const { theme } = useTheme()

  let bgColor = 'bg-black'
  if (theme === ThemeOptions.light) {
    bgColor = 'bg-gray-100'
  }

  return (
    <div className={`p-8 w-full h-full min-h-screen ${bgColor}`}>
      {children}
    </div>
  )
}
