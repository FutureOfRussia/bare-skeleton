import { HeaderStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack'

import { px } from '../helpers/Dimensions'
import { Colors } from '../constants'

export default function ScreenOptions(options?: StackNavigationOptions): StackNavigationOptions {
  return {
    cardStyle: {
      backgroundColor: Colors.WHITE,
    },
    headerTitleStyle: {
      fontSize: px(16),
      lineHeight: px(22),
      fontFamily: 'Medium',
      color: Colors.black(0.8),
      paddingHorizontal: px(5),
    },
    gestureResponseDistance: { horizontal: px(12) },
    headerTintColor: Colors.BLUE,
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    ...options,
  }
}
