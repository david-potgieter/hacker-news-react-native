import { StoryBody } from '@/components/story/story-body'
import { StoryFooter } from '@/components/story/story-footer'
import { StoryHeader } from '@/components/story/story-header'
import { Story } from '@/types/story-types'
import { Pressable, useToast } from 'native-base'
import { Linking } from 'react-native'

export function StoryItem({ story }: { story: Story }) {
  const toast = useToast()

  async function handleLinkPress(url: string | undefined) {
    try {
      if (!url) {
        toast.show({ description: 'TODO - internal, show item in app' })
        return
      }
      return Linking.canOpenURL(url)
        .then(() => {
          Linking.openURL(url)
        })
        .catch(err => {
          throw new Error(`Could not open link, ${err}`)
        })
    } catch (error) {
      toast.show({ description: `Error opening link - ${error}` })
    }
  }

  return (
    <Pressable onPress={() => handleLinkPress(story?.url)} variant="storyCard">
      <StoryHeader
        data={{ by: story.by, time: story.time, type: story.type, karma: story.karma }}
      />
      <StoryBody data={{ by: story.by, title: story.title, karma: story.karma }} />
      <StoryFooter data={{ score: story.score, url: story.url }} />
    </Pressable>
  )
}
