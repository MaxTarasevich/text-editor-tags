import { FC } from 'react'
import { Data } from '../../interface/data'
import Card from '../Card/Card'
import Note from './Note'

import './Notes.scss'

interface Props {
  data: Data[]
}

const Notes: FC<Props> = ({ data }) => {
  return (
    <Card className="notes">
      {data.length
        ? data.map((el) => <Note key={el.id} {...el} />)
        : 'Loading...'}
    </Card>
  )
}

export default Notes
