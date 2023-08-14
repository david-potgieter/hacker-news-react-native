import { Story } from '@/types/story-types'
import { Badge, Text } from 'native-base'

export function AppBadge({ type }: { type?: Story['type'] }) {
  return type ? (
    <Badge rounded="lg" variant={type}>
      <Text fontSize="sm" minW="9" textAlign="center">
        {type}
      </Text>
    </Badge>
  ) : null
}
