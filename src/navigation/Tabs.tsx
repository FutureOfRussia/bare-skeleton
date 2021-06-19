import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { TabsParamList } from '../types/Navigation'
import SecondStack from './SecondStack'
import FirstStack from './FirstStack'
import { Terms } from '../constants'

const Tab = createBottomTabNavigator<TabsParamList>()

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FirstStack" component={FirstStack} options={{ tabBarLabel: Terms.tabLabels.firstTab }} />
      <Tab.Screen name="SecondStack" component={SecondStack} options={{ tabBarLabel: Terms.tabLabels.secondTab }} />
    </Tab.Navigator>
  )
}
