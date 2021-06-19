import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { FirstStackParamList } from '../types/Navigation'
import ScreenOptions from './ScreenOptions'
import { Terms } from '../constants'
import { First } from '../screens'

const Stack = createStackNavigator<FirstStackParamList>()

export default function FirstStack() {
  return (
    <Stack.Navigator screenOptions={ScreenOptions()}>
      <Stack.Screen name="First" component={First} options={{ title: Terms.titles.first }} />
    </Stack.Navigator>
  )
}
