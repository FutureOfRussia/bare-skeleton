import { StyleSheet } from 'react-native'

import { px } from '../../helpers/Dimensions'
import { Colors } from '../../constants'

export default StyleSheet.create({
  container: {
    paddingHorizontal: px(20),
  },
  buttonBlock: {
    width: '100%',
    paddingHorizontal: px(20),
  },
  button: {
    width: '100%',
    height: px(50),
    borderRadius: px(30),
    backgroundColor: Colors.BLUE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: px(16),
    fontFamily: 'Medium',
    lineHeight: px(22),
    color: Colors.WHITE,
  },
})
