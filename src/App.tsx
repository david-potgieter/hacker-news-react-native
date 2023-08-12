import AppNavigator from '@/navigators/app-navigator'
import { ReactQueryProvider } from '@/providers/react-query/query-provider'

export default function App(): JSX.Element {
  return (
    <ReactQueryProvider>
      <AppNavigator />
    </ReactQueryProvider>
  )
}
