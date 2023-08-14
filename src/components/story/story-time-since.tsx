import { Story } from '@/types/story-types'
import { formatDistanceToNow, fromUnixTime } from 'date-fns'
import { Text } from 'native-base'

export function StoryTimeSince({ time }: { time?: Story['time'] }) {
  return time ? (
    <Text fontWeight="light">{formatDistanceToNow(fromUnixTime(time), { addSuffix: true })}</Text>
  ) : null
}
