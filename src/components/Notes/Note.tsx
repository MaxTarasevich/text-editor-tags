import { FC } from 'react'

import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri'

import './Note.scss'

interface Props {
  text: string
}

const Note: FC<Props> = ({ text }) => {
  const random = ((3 - -3) * Math.random() + -3).toFixed(2)

  return (
    <div className="note" style={{ transform: `rotate(${random}deg)` }}>
      <p>{text}</p>
      <div className="note__icons">
        <RiDeleteBin5Line />
        <RiEditLine />
      </div>
    </div>
  )
}

export default Note
