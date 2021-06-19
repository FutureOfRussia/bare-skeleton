import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Tabs: {
        screens: {
          FirstTab: 'first',
          SecondTab: 'second',
        },
      },
    },
  },
}
