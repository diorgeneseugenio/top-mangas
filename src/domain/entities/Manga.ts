export interface IManga {
  id: number
  rank: number
  title: string
  image: string
}

export interface IMangaFromAPI {
  mal_id: number
  rank: number
  title: string
  url: string
  type: string
  volumes?: number
  start_date: string
  end_date: string
  members: number
  score: number
  image_url: string
}
