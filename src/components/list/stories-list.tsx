import { StoryItem } from '@/components/story/story-item'
import { useStories } from '@/state/queries/use-stories'
import { FlashList } from '@shopify/flash-list'
import { Box, useToast } from 'native-base'

export function StoriesList() {
  const toast = useToast()
  const { data, isLoading, isError, error, refetch, isFetching } = useStories()

  if (isError) toast.show({ description: `Error fetching stories - ${error}` })

  return (
    <Box p="4" variant="appBackGround">
      <FlashList
        data={data}
        renderItem={({ item }) => <StoryItem story={item} />}
        estimatedItemSize={200}
        refreshing={isLoading || isFetching}
        onRefresh={() => refetch()}
        ListEmptyComponent={() => (isLoading || isFetching ? null : <Box>Empty</Box>)}
      />
    </Box>
  )
}
