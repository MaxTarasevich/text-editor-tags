import { FC } from 'react'
import { Data } from '../../interface/data'
import Card from '../Card/Card'
import Note from './Note'

import './Notes.scss'

interface Props {
  data: Data[]
  onDeleteData: (id: number) => void
}

const Notes: FC<Props> = ({ data, onDeleteData }) => {
  return (
    <Card className="notes">
      {data.length
        ? data.map((el) => (
            <Note key={el.id} {...el} onDeleteData={onDeleteData} />
          ))
        : 'You don`t have any notes'}
    </Card>
  )
}

export default Notes
