import { HomeScreen } from '@/screens/home-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RNBootSplash from 'react-native-bootsplash'
import 'react-native-reanimated'

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
