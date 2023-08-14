import AppNavigator from '@/navigators/app-navigator'
import { ReactQueryProvider } from '@/providers/react-query/query-provider'
import { ThemeProvider } from '@/providers/theme-provider/theme-provider'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ReactQueryProvider>
          <AppNavigator />
        </ReactQueryProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
