import { cleanUrl } from '@/helpers/clean-url'
import { hackerNewsColors } from '@/providers/theme-provider/hacker-news-theme'
import { Story } from '@/types/story-types'
import { HStack, Text } from 'native-base'
import { Icon } from 'react-native-eva-icons'

export function StoryUrl({ url }: { url?: Story['url'] }) {
  return (
    <HStack alignItems="center" space="1">
      <Icon
        name="link-outline"
        width="20"
        height="20"
        fill={hackerNewsColors['color-primary-500']}
      />
      <Text fontWeight="bold" fontSize="sm">
        {cleanUrl(url ?? 'news.ycombinator.com')}
      </Text>
    </HStack>
  )
}
