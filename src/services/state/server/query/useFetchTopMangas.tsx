import { useQuery, UseQueryResult } from 'react-query'

import { IManga } from '@/domain/entities/Manga'
import { getTopMangas } from '@/infra/http/api/getTopMangas'
import { QueryKeys } from '@/services/constants/queryKeys'

export function useFetchTopMangas(): UseQueryResult<IManga[]> {
  return useQuery([QueryKeys.topMangas], getTopMangas, {
    cacheTime: 10 * 60000
  })
}
