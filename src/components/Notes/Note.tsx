import { FC, useState } from 'react'

import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri'

import { ActionType } from '../../interface/actions-type'

import Input from '../Input/Input'

import './Note.scss'

interface Props {
  id: number
  text: string
  updateNotes: React.Dispatch<ActionType>
}

const Note: FC<Props> = ({ id, text, updateNotes }) => {
  const [edit, setEdit] = useState(false)

  const random = ((3 - -3) * Math.random() + -3).toFixed(2)

  function toggleEditHandler() {
    setEdit((prevEdit) => !prevEdit)
  }

  function deleteNoteHandler(id: number) {
    updateNotes({ type: 'delete', payload: id })
  }

  return (
    <div className="note" style={{ transform: `rotate(${random}deg)` }}>
      {edit ? (
        <>
          <Input
            noteText={text}
            updateNotes={updateNotes}
            edit={edit}
            onToggleEdit={toggleEditHandler}
            id={id}
          />
        </>
      ) : (
        <>
          <p>{text}</p>
          <div className="note__icons">
            <RiDeleteBin5Line onClick={() => deleteNoteHandler(id)} />
            <RiEditLine onClick={() => setEdit(!edit)} />
          </div>
        </>
      )}
    </div>
  )
}

export default Note
