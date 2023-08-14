import { hackerNewsColors, hackerNewsTheme } from '@/providers/theme-provider/hacker-news-theme'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets()
  const theme = extendTheme(hackerNewsTheme)

  const base = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: hackerNewsColors['color-gray-500'],
    },
  })

  return (
    <NativeBaseProvider theme={theme}>
      <View style={base.container}>{children}</View>
    </NativeBaseProvider>
  )
}
