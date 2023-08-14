import { StoryItem } from '@/components/story/story-item'
import { Story } from '@/types/story-types'
import { FlashList } from '@shopify/flash-list'
import { Box } from 'native-base'

/**
 * Story title
 * Story URL
 * Story timestamp
 * Story score
 * Author id
 * Author karma score
 */

const DATA: Story[] = [
  {
    title: 'Internet Archive: “Our Fight Is Far from Over”',
    url: 'https://blog.archive.org/2023/08/11/our-fight-is-far-from-over/',
    time: 1691804811,
    score: 106,
    by: 'app4soft',
    karma: 1234,
    type: 'story',
  },
  {
    title: 'GoGoGrandparent (YC S16) is hiring a senior/staff back end/full-stack engineer',
    time: 1691946056,
    score: 1,
    by: 'davidchl',
    karma: 8,
    type: 'job',
  },
  {
    title: 'Wendelstein 7-X: Gigajoule energy turnover generated for eight minutes',
    url: 'https://www.ipp.mpg.de/5322229/01_23',
    time: 1691779002,
    score: 493,
    by: 'greesil',
    karma: 220,
    type: 'story',
  },
]

export function StoriesList() {
  return (
    <Box p="4" variant="appBackGround">
      <FlashList
        data={DATA}
        renderItem={({ item }) => <StoryItem story={item} />}
        estimatedItemSize={200}
      />
    </Box>
  )
}
