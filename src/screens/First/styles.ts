import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: px(20),
  },
  title: {
    fontSize: px(22),
    fontFamily: 'Medium',
    color: Colors.BLACK,
    marginBottom: px(12),
  },
  subtitle: {
    fontSize: px(14),
    fontFamily: 'Regular',
    color: Colors.black(0.8),
  },
  button: {
    marginTop: px(30),
  },
  buttonText: {
    fontSize: px(12),
    fontFamily: 'Regular',
    color: Colors.BLUE,
  },
})
