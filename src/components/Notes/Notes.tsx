import { FC } from 'react'

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
  return (
    <Card className="notes">
      {data.length
        ? data.map((el) => (
            <Note key={el.id} {...el} updateNotes={updateNotes} />
          ))
        : 'You don`t have any notes'}
    </Card>
  )
}

export default Notes
