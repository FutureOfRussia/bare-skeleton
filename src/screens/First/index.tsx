import { useDispatch, useSelector } from 'react-redux'
import * as SecureStore from 'expo-secure-store'
import { Text, View } from 'react-native'
import React, { useState } from 'react'

import { AppState, Dispatch, State } from '../../types/Models'
import { OpacityButton } from '../../components'
import { Terms } from '../../constants'
import styles from './styles'

export default function First() {
  const {
    appState: { setAppState },
  } = useDispatch<Dispatch>()
  const { login } = useSelector<State, AppState>(state => state.appState)
  const [loading, setLoading] = useState(false)

  const logOut = async () => {
    try {
      setLoading(true)
      await SecureStore.deleteItemAsync('token')
      setAppState({ isLogin: false, login: '' })
    } catch {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Terms.first.welcome}</Text>
      <Text style={styles.subtitle}>{`${Terms.first.login} ${login}`}</Text>
      <OpacityButton style={styles.button} onPress={logOut} debounce disabled={loading}>
        <Text style={styles.buttonText}>{Terms.first.logout}</Text>
      </OpacityButton>
    </View>
  )
}
