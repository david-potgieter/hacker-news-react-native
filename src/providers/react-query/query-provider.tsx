import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const QUERY_KEYS = {}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      retry: false,
      //   cacheTime: 1000 * 60 * 10, // serve from cache for 10 minutes
      //   staleTime: 1000 * 60 * 5, // no backend calls for 5 minutes
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
})

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
