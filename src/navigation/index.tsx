import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as React from 'react'

import LinkingConfiguration from '../helpers/LinkingConfiguration'
import { RootStackParamList } from '../types/Navigation'
import { AppState, State } from '../types/Models'
import { Colors, Styles, Terms } from '../constants'
import ScreenOptions from './ScreenOptions'
import { Login } from '../screens'
import Tabs from './Tabs'

const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation(): JSX.Element {
  const { isLogin } = useSelector<State, AppState>(state => state.appState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      // здесь можно запрашивать начальные данные
      setLoading(false)
    })()
  }, [])

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {loading ? (
        <View style={[Styles.fullFlex, Styles.centered]}>
          <ActivityIndicator size="large" color={Colors.BLUE} />
        </View>
      ) : (
        <Stack.Navigator screenOptions={ScreenOptions()}>
          {isLogin ? (
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="Login" component={Login} options={{ title: Terms.titles.login }} />
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
