import React from 'react'

import { MangaItem } from './MangaItem'
import { useFetchTopMangas } from '@/services/state/server/query/useFetchTopMangas'

export const MangasList = () => {
  const { data: mangas } = useFetchTopMangas()

  if (!mangas) {
    return null
  }

  return (
    <div className="grid grid-cols-6 gap-6">
      {mangas?.map((manga) => (
        <MangaItem key={manga.id} manga={manga} />
      ))}
    </div>
  )
}
