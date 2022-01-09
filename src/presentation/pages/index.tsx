import React from 'react'

import { Layout } from '@/presentation/components/Layout/Layout'
import { MangasList } from '@/presentation/containers/Index/MangasList'

export const IndexPage = () => {
  return (
    <Layout>
      <MangasList />
    </Layout>
  )
}
