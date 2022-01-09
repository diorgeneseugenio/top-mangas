import { IndexPage } from '@/presentation/pages'
import { NotFoundPage } from '@/presentation/pages/NotFoundPage'
import React from 'react'
import { Route, Routes as RoutesRouter } from 'react-router-dom'

export const Routes = () => {
  return (
    <RoutesRouter>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RoutesRouter>
  )
}
