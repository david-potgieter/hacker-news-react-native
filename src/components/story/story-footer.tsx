import { StoryScore } from '@/components/story/story-score'
import { StoryUrl } from '@/components/story/story-url'
import { Story } from '@/types/story-types'
import { HStack } from 'native-base'

export function StoryFooter({ data: { score, url } }: { data: Partial<Story> }) {
  return (
    <HStack space="2" justifyContent="space-between">
      <StoryScore score={score} />
      <StoryUrl url={url} />
    </HStack>
  )
}
