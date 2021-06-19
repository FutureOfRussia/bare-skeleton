import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { SecondStackParamList } from '../types/Navigation'
import ScreenOptions from './ScreenOptions'
import { Terms } from '../constants'
import { Second } from '../screens'

const Stack = createStackNavigator<SecondStackParamList>()

export default function SecondStack() {
  return (
    <Stack.Navigator screenOptions={ScreenOptions()}>
      <Stack.Screen name="Second" component={Second} options={{ title: Terms.titles.second }} />
    </Stack.Navigator>
  )
}
