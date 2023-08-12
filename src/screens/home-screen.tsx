import { Button, Icon, useTheme } from '@ui-kitten/components'
import { StyleSheet, Text, View } from 'react-native'

export function HomeScreen(): JSX.Element {
  const theme = useTheme()

  const styles = StyleSheet.create({
    container: { height: '100%', width: '100%' },
    icon: { width: 32, height: 32 },
  })

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Icon name="facebook" style={styles.icon} fill={theme['color-primary-default']} />
      <Button>BUTTON</Button>
    </View>
  )
}
