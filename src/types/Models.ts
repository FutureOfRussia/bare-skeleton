// AppState
export interface AppState {
  login: string
  isLogin: boolean
}

export interface AppStateDispatch {
  setAppState: (payload: Record<string, unknown>) => AppState
}

// Full State
export interface State {
  appState: AppState
}

// Full Dispatch
export interface Dispatch {
  appState: AppStateDispatch
}
