import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const QUERY_KEYS = {
  TOP_STORY_IDS: 'top-story-ids',
  STORY: 'story',
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: false,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
