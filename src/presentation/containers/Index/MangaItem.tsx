import React from 'react'

import { IManga } from '@/domain/entities/Manga'
import { Button } from '@/presentation/components/Button/Button'

interface OwnProps {
  manga: IManga
}

export const MangaItem = ({ manga }: OwnProps) => {
  return (
    <div key={manga.id} className="mb-2">
      <img
        src={manga.image}
        alt={manga.title}
        className="w-full h-96 rounded blur-sm"
      />
      <p className="mt-2 h-20 text-white whitespace-normal">{manga.title}</p>
      <Button variant="primary">Favorite</Button>
    </div>
  )
}
