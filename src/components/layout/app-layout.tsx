import { Box } from 'native-base'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return <Box variant="appBackground">{children}</Box>
}
