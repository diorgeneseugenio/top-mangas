import React from 'react'

import { MangaActions } from '../containers/Index/MangaActions'
import { Layout } from '@/presentation/components/Layout/Layout'
import { MangasList } from '@/presentation/containers/Index/MangasList'

export const IndexPage = () => {
  return (
    <Layout>
      <MangaActions />
      <MangasList />
    </Layout>
  )
}
