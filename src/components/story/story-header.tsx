import { StoryTimeSince } from '@/components/story/story-time-since'
import { AppBadge } from '@/components/ui/badge'
import { Story } from '@/types/story-types'
import { HStack } from 'native-base'

export function StoryHeader({ data: { time, type } }: { data: Partial<Story> }) {
  return (
    <HStack space="2" justifyContent="space-between" alignItems="center">
      <AppBadge type={type} />
      <StoryTimeSince time={time} />
    </HStack>
  )
}
