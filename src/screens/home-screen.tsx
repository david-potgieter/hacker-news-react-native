import { AppLayout } from '@/components/layout/app-layout'
import { StoriesList } from '@/components/list/stories-list'
import { StatusBar } from 'react-native'

export function HomeScreen(): JSX.Element {
  return (
    <AppLayout>
      <StatusBar barStyle="light-content" />
      <StoriesList />
    </AppLayout>
  )
}
