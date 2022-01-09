import create from 'zustand'
import { persist } from 'zustand/middleware'

import { PersistKeys } from '@/services/constants/persistKeys'

export interface FavoritesState {
  showOnlyFavorites: boolean
  mangasFavoriteIds: number[]
  toggleShowOnlyFavorites: () => void
  handleFavoriteMangaId: (mangaId: number) => void
}

export const useFavorites = create<FavoritesState>(
  persist(
    (set, get) => ({
      showOnlyFavorites: false,
      mangasFavoriteIds: [],
      toggleShowOnlyFavorites: () => {
        set({
          showOnlyFavorites: !get().showOnlyFavorites
        })
      },
      handleFavoriteMangaId: (mangaId) => {
        let favoriteMangas = Array.from(get().mangasFavoriteIds)

        const isMangaInFavoriteList = favoriteMangas.includes(mangaId)
        if (isMangaInFavoriteList) {
          favoriteMangas = favoriteMangas.filter(
            (favoriteMangaId) => favoriteMangaId !== mangaId
          )
        } else {
          favoriteMangas.push(mangaId)
        }

        set({
          mangasFavoriteIds: favoriteMangas
        })
      }
    }),
    { name: PersistKeys.favoriteMangas }
  )
)
