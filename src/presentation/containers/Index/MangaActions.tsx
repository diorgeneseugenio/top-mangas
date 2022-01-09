import React from 'react'

import { Button } from '@/presentation/components/Button/Button'
import { useFavorites } from '@/services/state/client/hooks/useFavorites'

export const MangaActions = () => {
  const { showOnlyFavorites, toggleShowOnlyFavorites } = useFavorites()

  return (
    <div className="mb-8">
      <Button variant="primary" full={false} onClick={toggleShowOnlyFavorites}>
        {showOnlyFavorites && 'Show All'}
        {!showOnlyFavorites && 'Show Only Favorites'}
      </Button>
    </div>
  )
}
