import { hackerNewsColors } from '@/providers/theme-provider/hacker-news-theme'
import { Story } from '@/types/story-types'
import { HStack, Text } from 'native-base'
import { Icon } from 'react-native-eva-icons'

export function StoryAuthor({ data: { by, karma } }: { data: Partial<Story> }) {
  return by ? (
    <HStack mb="4" justifyContent="flex-start" alignItems="center" space="1">
      <Icon
        name="person-outline"
        width="15"
        height="15"
        fill={hackerNewsColors['color-primary-500']}
      />

      <Text variant="storyAuthor" fontSize="xs">
        {by}
      </Text>
      {karma ? (
        <Text variant="storyAuthor" fontSize="xs">
          | {karma} karma
        </Text>
      ) : null}
    </HStack>
  ) : null
}
