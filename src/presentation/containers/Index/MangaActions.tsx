import React from 'react'

import { Button } from '@/presentation/components/Button/Button'

export const MangaActions = () => {
  return (
    <div className="mb-8">
      <Button variant="primary" full={false}>
        Show Only Favorites
      </Button>
    </div>
  )
}
