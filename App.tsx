import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import React, { useState } from 'react'

import { useCachedResources, useDebounce } from './src/hooks'
import Navigation from './src/navigation'
import { Styles } from './src/constants'
import store from './src/store'

export default function App() {
  const [rootViewIsLayout, setRootViewIsLayout] = useState(false)

  useDebounce()

  const appIsReady = useCachedResources(rootViewIsLayout)

  if (!appIsReady) {
    return null
  }

  return (
    <View style={Styles.fullFlex} onLayout={() => setRootViewIsLayout(true)}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </View>
  )
}
