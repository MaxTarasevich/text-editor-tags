import { FC, useState } from 'react'

import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri'
import Input from '../Input/Input'

import './Note.scss'

interface Props {
  id: number
  text: string
  onDeleteData: (id: number) => void
  onEditData: (id: number, newText: string) => void
}

const Note: FC<Props> = ({ id, text, onDeleteData, onEditData }) => {
  const [edit, setEdit] = useState(false)

  const random = ((3 - -3) * Math.random() + -3).toFixed(2)

  function toggleEditHandler() {
    setEdit((prevEdit) => !prevEdit)
  }

  return (
    <div className="note" style={{ transform: `rotate(${random}deg)` }}>
      {edit ? (
        <>
          <Input
            noteText={text}
            onEditData={onEditData}
            onToggleEdit={toggleEditHandler}
            id={id}
          />
        </>
      ) : (
        <>
          <p>{text}</p>
          <div className="note__icons">
            <RiDeleteBin5Line onClick={() => onDeleteData(id)} />
            <RiEditLine onClick={() => setEdit(!edit)} />
          </div>
        </>
      )}
    </div>
  )
}

export default Note
