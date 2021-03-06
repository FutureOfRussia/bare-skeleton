export interface Shadow {
  shadowColor?: string
  shadowOffset?: {
    width?: number
    height?: number
  }
  shadowRadius?: number
  shadowOpacity?: number
  elevation?: number
}

export interface HitSlop {
  top: number
  left: number
  bottom: number
  right: number
}
