import React from 'react'

import { MangaItem } from './MangaItem'
import { Loader } from '@/presentation/components/Loader/Loader'
import { useFavorites } from '@/services/state/client/hooks/useFavorites'
import { useFetchTopMangas } from '@/services/state/server/query/useFetchTopMangas'

export const MangasList = () => {
  const { data: mangas, isLoading, isFetching } = useFetchTopMangas()
  const { mangasFavoriteIds, showOnlyFavorites } = useFavorites()

  if (!mangas) {
    return null
  }

  if (isLoading || isFetching) {
    return <Loader />
  }

  return (
    <div className="grid grid-cols-6 gap-6">
      {mangas
        .filter(
          (manga) => !showOnlyFavorites || mangasFavoriteIds.includes(manga.id)
        )
        .map((manga) => (
          <MangaItem key={manga.id} manga={manga} />
        ))}
    </div>
  )
}
