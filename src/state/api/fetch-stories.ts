import { getRandomIds } from '@/helpers/get-random-ids'

export enum API_URLS {
  TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json',
  STORY = 'https://hacker-news.firebaseio.com/v0/item/',
  AUTHOR = 'https://hacker-news.firebaseio.com/v0/user/',
}

export async function fetchTopStoryIds(returnCount: number) {
  try {
    const data = await fetch(`${API_URLS.TOP_STORIES}`)
    const storyIdsAll = await data.json()
    return getRandomIds(storyIdsAll, returnCount)
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}

export async function fetchAuthors(authorIds?: string[]) {
  try {
    if (!authorIds || authorIds.length < 1) return []
    const dataPromises = authorIds.map(async (id: string) => {
      const authors = await fetch(`${API_URLS.AUTHOR}${id}.json`)
      return await authors.json()
    })
    return await Promise.all(dataPromises)
    return []
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}

export async function fetchStories(storyIds?: number[]) {
  try {
    if (!storyIds || storyIds.length < 1) return []
    const dataPromises = storyIds.map(async (id: number) => {
      const story = await fetch(`${API_URLS.STORY}${id}.json`)
      return await story.json()
    })
    const storiesRaw = await Promise.all(dataPromises)
    const authors = await fetchAuthors(storiesRaw?.map(story => story.by))
    return storiesRaw.map(story => {
      const author = authors?.find(u => u.id === story.by)
      return { ...story, by: author.id, karma: author.karma }
    })
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}

export async function fetchTopStoriesChain(returnCount = 10) {
  try {
    const storyIds = await fetchTopStoryIds(returnCount)
    const stories = await fetchStories(storyIds)
    return stories
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message)
  }
}
