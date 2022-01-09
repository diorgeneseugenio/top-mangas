import React, { ReactChild } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

interface OwnProps {
  children: ReactChild
}

const queryClient = new QueryClient()

export const Providers = ({ children }: OwnProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
