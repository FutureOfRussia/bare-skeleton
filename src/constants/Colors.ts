export default {
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: '#EEEEEE',
  GREEN: '#3FC27B',
  PINK: '#FF558B',
  RED: '#c62626',
  BLUE: '#0684F8',
  white: (opacity = 1): string => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1): string => `rgba(0, 0, 0, ${opacity})`,
  rgb: (r = 0, g = 0, b = 0): string => `rgb(${r}, ${g}, ${b})`,
  rgba: (r = 0, g = 0, b = 0, a = 0): string => `rgba(${r}, ${g}, ${b}, ${a})`,
}
