import { Data } from './data'

export type ActionType =
  | { type: 'delete'; payload: number }
  | { type: 'add'; payload: string }
  | { type: 'edit'; payload: { id: number; newText: string } }
  | { type: 'load'; payload: Data[] }
