import { Story } from '@/types/story-types'

export function sortStoriesByScore(stories: Story[], direction: 'asc' | 'desc') {
  return stories.sort((a, b) => (direction === 'asc' ? a.score - b.score : b.score - a.score))
}
