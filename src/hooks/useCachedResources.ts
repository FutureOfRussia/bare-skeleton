// eslint-disable-next-line camelcase
import { Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen'
import { useState, useEffect } from 'react'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import { Images } from '../constants'

export default function useCachedResources(rootViewIsLayout: boolean): boolean {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({ Regular: Montserrat_400Regular, Medium: Montserrat_500Medium })
        await Asset.loadAsync(Images.list)
      } finally {
        setAppIsReady(true)
      }
    })()
  }, [])

  useEffect(() => {
    if (rootViewIsLayout) SplashScreen.hideAsync()
  }, [rootViewIsLayout])

  return appIsReady
}
