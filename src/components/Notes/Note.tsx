import { FC, useState } from 'react'

import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri'

import './Note.scss'

interface Props {
  id: number
  text: string
  onDeleteData: (id: number) => void
}

const Note: FC<Props> = ({ id, text, onDeleteData }) => {
  const [edit, setEdit] = useState(false)

  const random = ((3 - -3) * Math.random() + -3).toFixed(2)

  return (
    <div className="note" style={{ transform: `rotate(${random}deg)` }}>
      <p>{text}</p>
      <div className="note__icons">
        <RiDeleteBin5Line onClick={() => onDeleteData(id)} />
        <RiEditLine />
      </div>
    </div>
  )
}

export default Note
