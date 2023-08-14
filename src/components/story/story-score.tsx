import { pluralize } from '@/helpers/pluralize'
import { hackerNewsColors } from '@/providers/theme-provider/hacker-news-theme'
import { Story } from '@/types/story-types'
import { HStack, Text } from 'native-base'
import { Icon } from 'react-native-eva-icons'

export function StoryScore({ score }: { score?: Story['score'] }) {
  return score ? (
    <HStack alignItems="center" space="1">
      <Icon
        name="arrow-ios-upward-outline"
        width="20"
        height="20"
        fill={hackerNewsColors['color-primary-500']}
      />
      <Text fontWeight="bold" fontSize="sm">
        {score} {pluralize('pt', score ?? 0)}
      </Text>
    </HStack>
  ) : null
}
