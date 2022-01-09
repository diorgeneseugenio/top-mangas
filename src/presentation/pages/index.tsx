import React from 'react'

import { MangasList } from '../containers/Index/MangasList'

export const IndexPage = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <MangasList />
    </div>
  )
}
