declare namespace Sync {
  export interface ApplicationState {
    syncData: State | undefined
  }

  export interface State {
    thisDeviceName: string
    devices: Array<object>
    isSyncConfigured: boolean
  }
}
