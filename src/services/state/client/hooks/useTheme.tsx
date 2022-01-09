import create from 'zustand'
import { persist } from 'zustand/middleware'

import { PersistKeys } from '@/services/constants/persistKeys'

export enum ThemeOptions {
  light = 'light',
  dark = 'dark'
}

export interface ThemeState {
  theme: ThemeOptions
  toggleTheme: () => void
}

export const useTheme = create<ThemeState>(
  persist(
    (set, get) => ({
      theme: ThemeOptions.dark,
      toggleTheme: () => {
        set({
          theme:
            get().theme === ThemeOptions.light
              ? ThemeOptions.dark
              : ThemeOptions.light
        })
      }
    }),
    { name: PersistKeys.theme }
  )
)
