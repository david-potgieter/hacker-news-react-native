import { AppLayout } from '@/components/layout/app-layout'
import { StoriesList } from '@/components/list/stories-list'

export function HomeScreen(): JSX.Element {
  return (
    <AppLayout>
      <StoriesList />
    </AppLayout>
  )
}
