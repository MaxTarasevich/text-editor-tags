import { useEffect, useReducer } from 'react'

import './App.scss'

import dataJson from './data/data.json'

import Card from './components/Card/Card'
import Input from './components/Input/Input'
import Notes from './components/Notes/Notes'

import { Data } from './interface/data'
import { ActionType } from './interface/actions-type'

function notesReduser(state: Data[], action: ActionType) {
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

function App() {
  const initialState: Data[] = []

  const [notes, dispatchNotes] = useReducer(notesReduser, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatchNotes({ type: 'load', payload: dataJson })
    }, 500)
  }, [])

  return (
    <main className="app container">
      <h1>Text editor with tags</h1>

      <Input updateNotes={dispatchNotes} />

      <Card>Tags for sorting</Card>

      <Notes data={notes} updateNotes={dispatchNotes} />
    </main>
  )
}

export default App
