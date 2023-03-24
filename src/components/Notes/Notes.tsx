import { FC, useContext } from 'react'
import tagsContext from '../../context/tags-context'

import { ActionType } from '../../interface/actions-type'
import { Data } from '../../interface/data'

import Card from '../Card/Card'
import Note from './Note'

import './Notes.scss'

interface Props {
  data: Data[]
  updateNotes: React.Dispatch<ActionType>
}

const Notes: FC<Props> = ({ data, updateNotes }) => {
  const context = useContext(tagsContext)

  return (
    <Card className="notes">
      {context?.sortedTags.sortedNotes.length
        ? context.sortedTags.sortedNotes.map((el) => (
            <Note key={el.id} {...el} updateNotes={updateNotes} />
          ))
        : data.length
        ? data.map((el) => (
            <Note key={el.id} {...el} updateNotes={updateNotes} />
          ))
        : 'You don`t have any notes'}
    </Card>
  )
}

export default Notes
