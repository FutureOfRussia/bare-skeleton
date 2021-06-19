import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as SecureStore from 'expo-secure-store'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import moment from 'moment'

import { BounceButton, TextInputWithLabel } from '../../components'
import { Colors, Styles, Terms } from '../../constants'
import { Dispatch } from '../../types/Models'
import { px } from '../../helpers/Dimensions'
import styles from './styles'

export default function Login() {
  const {
    appState: { setAppState },
  } = useDispatch<Dispatch>()
  const [validation, setValidation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const insets = useSafeAreaInsets()

  const logIn = async () => {
    try {
      setLoading(true)
      if (password && login) {
        await SecureStore.setItemAsync('token', `token-${moment()}`)
        setAppState({ isLogin: true, login })
      } else {
        setValidation(true)
        setLoading(false)
      }
    } catch {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={Styles.fullFlex}
      behavior="padding"
      keyboardVerticalOffset={px(60)}
      enabled={Platform.OS === 'ios'}
    >
      <ScrollView keyboardShouldPersistTaps="handled" style={Styles.fullFlex} contentContainerStyle={styles.container}>
        <TextInputWithLabel
          value={login}
          label={Terms.login.login}
          onChangeText={text => setLogin(text)}
          inputProps={{ placeholder: Terms.login.loginPlaceholder }}
          {...(validation && { validation: !!login })}
        />
        <TextInputWithLabel
          secure
          value={password}
          label={Terms.login.password}
          onChangeText={text => setPassword(text)}
          inputProps={{ placeholder: Terms.login.passwordPlaceholder }}
          {...(validation && { validation: !!password })}
        />
      </ScrollView>
      <View style={[styles.buttonBlock, { paddingBottom: insets.bottom }]}>
        <BounceButton style={styles.button} onPress={logIn} disabled={loading} debounce haptic>
          <Text style={styles.buttonText}>{Terms.login.submit}</Text>
          {loading && <ActivityIndicator size="small" color={Colors.WHITE} style={{ marginLeft: px(10) }} />}
        </BounceButton>
      </View>
    </KeyboardAvoidingView>
  )
}
