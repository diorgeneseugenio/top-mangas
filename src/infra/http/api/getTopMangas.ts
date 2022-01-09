import axios from 'axios'

import { IManga, IMangaFromAPI } from '@/domain/entities/Manga'

export const getTopMangas = async (): Promise<IManga[]> => {
  const { data } = await axios.request<{ top: IMangaFromAPI[] }>({
    url: 'https://api.jikan.moe/v3/top/manga',
    method: 'get'
  })

  const sanitizedManga: IManga[] = data.top.map((mangaFromApi) => ({
    id: mangaFromApi.mal_id,
    rank: mangaFromApi.rank,
    title: mangaFromApi.title,
    image: mangaFromApi.image_url
  }))

  return sanitizedManga
}
