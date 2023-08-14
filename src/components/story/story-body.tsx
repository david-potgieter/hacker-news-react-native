import { StoryAuthor } from '@/components/story/story-author'
import { Story } from '@/types/story-types'
import { Text, VStack } from 'native-base'

export function StoryBody({ data: { by, title, karma } }: { data: Partial<Story> }) {
  return (
    <VStack>
      <Text py="2" variant="storyTitle">
        {title}
      </Text>
      <StoryAuthor data={{ by, karma }} />
    </VStack>
  )
}
