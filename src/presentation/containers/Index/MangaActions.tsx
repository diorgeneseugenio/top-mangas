import React from 'react'

import { Button } from '@/presentation/components/Button/Button'
import { useFavorites } from '@/services/state/client/hooks/useFavorites'
import { useTheme } from '@/services/state/client/hooks/useTheme'

export const MangaActions = () => {
  const { showOnlyFavorites, toggleShowOnlyFavorites } = useFavorites()
  const { toggleTheme } = useTheme()

  return (
    <div className="flex justify-between mb-8">
      <Button variant="primary" full={false} onClick={toggleShowOnlyFavorites}>
        {showOnlyFavorites && 'Show All'}
        {!showOnlyFavorites && 'Show Only Favorites'}
      </Button>
      <Button variant="primary" full={false} onClick={toggleTheme}>
        Change Theme
      </Button>
    </div>
  )
}
