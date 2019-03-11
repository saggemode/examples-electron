import { ActionType, AppState } from '../Types'
import { openWithPlay, play, pause, stop, seek, changeVolume } from '../actions'

export type Actions =
  | ReturnType<typeof openWithPlay>
  | ReturnType<typeof play>
  | ReturnType<typeof pause>
  | ReturnType<typeof stop>
  | ReturnType<typeof seek>
  | ReturnType<typeof changeVolume>

/**
 * Adjust the state of the application according to the action.
 * @param state Current state.
 * @param action Action data.
 * @returns New State.
 */
const reducer = (state = {}, action: Actions): AppState => {
  switch (action.type) {
    case ActionType.OpenMusicWithPlay:
      return state

    case ActionType.Play:
      return state

    case ActionType.Pause:
      return state

    case ActionType.Stop:
      return state

    case ActionType.Seek:
      return state

    case ActionType.ChangeVolume:
      return state

    default:
      return state
  }
}

export default reducer
