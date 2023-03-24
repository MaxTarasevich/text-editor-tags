import { ActionType } from '../interface/actions-type'
import { Data } from '../interface/data'

export function notesReduser(state: Data[], action: ActionType) {
  switch (action.type) {
    case 'load':
      return action.payload
    case 'add':
      return [
        ...state,
        {
          id: Number(new Date()),
          text: action.payload,
          tags: [''],
        },
      ]
    case 'delete':
      return state.filter((note) => note.id !== action.payload)
    case 'edit':
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, text: action.payload.newText }
        }
        return note
      })
    default:
      return state
  }
}
