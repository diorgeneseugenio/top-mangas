import React from 'react'

import { IManga } from '@/domain/entities/Manga'
import { Button } from '@/presentation/components/Button/Button'
import { useFavorites } from '@/services/state/client/hooks/useFavorites'

interface OwnProps {
  manga: IManga
}

export const MangaItem = ({ manga }: OwnProps) => {
  const { mangasFavoriteIds, handleFavoriteMangaId } = useFavorites()

  const isFavorite = mangasFavoriteIds.includes(manga.id)

  return (
    <div key={manga.id} className="mb-2">
      <img
        src={manga.image}
        alt={manga.title}
        className={`w-full h-96 rounded ${isFavorite ? '' : 'blur-sm'}`}
      />
      <p className="mt-2 h-20 text-white whitespace-normal">{manga.title}</p>
      {isFavorite && (
        <Button
          variant="secondary"
          onClick={() => handleFavoriteMangaId(manga.id)}
        >
          Disfavor
        </Button>
      )}
      {!isFavorite && (
        <Button
          variant="primary"
          onClick={() => handleFavoriteMangaId(manga.id)}
        >
          Favorite
        </Button>
      )}
    </div>
  )
}
