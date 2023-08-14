import { sortStoriesByScore } from '@/helpers/sort-stories-by-score'
import { QUERY_KEYS } from '@/providers/react-query/query-provider'
import { fetchTopStoriesChain } from '@/state/api/fetch-stories'
import { Story } from '@/types/story-types'
import { useQuery } from '@tanstack/react-query'

export function useStories(returnCount?: number) {
  return useQuery({
    queryKey: [QUERY_KEYS.TOP_STORY_IDS],
    queryFn: async () => await fetchTopStoriesChain(returnCount),
    select: data => {
      const output = [...(data as Story[])]
      return sortStoriesByScore(output, 'asc')
    },
  })
}
