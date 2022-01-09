import React from 'react'

import { useFetchTopMangas } from '@/services/state/server/query/useFetchTopMangas'

export const MangasList = () => {
  const { data: mangas } = useFetchTopMangas()

  if (!mangas) {
    return null
  }

  return (
    <div>
      {mangas?.map((manga) => (
        <div key={manga.id}>
          <span>{manga.title}</span>
        </div>
      ))}
    </div>
  )
}
