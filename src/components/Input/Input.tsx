import { FC, useEffect, useRef, useState } from 'react'

import { ActionType } from '../../interface/actions-type'

import Card from '../Card/Card'

import './Input.scss'

interface Props {
  id?: number
  noteText?: string
  onToggleEdit?: () => void
  updateNotes: React.Dispatch<ActionType>
  edit?: boolean
}

const Input: FC<Props> = ({
  noteText,
  updateNotes,
  edit,
  id,
  onToggleEdit,
}) => {
  const textValue = useRef<HTMLTextAreaElement | null>(null)

  const [text, setText] = useState('')

  const [count, setCount] = useState(0)

  useEffect(() => {
    textValue.current?.focus()
    noteText && setText(noteText)
  }, [])

  function onClickHandler() {
    if (edit && id && noteText && onToggleEdit) {
      updateNotes({ type: 'edit', payload: { id: id, newText: text } })
      onToggleEdit()
    } else {
      if (text.trim().length) {
        updateNotes({ type: 'add', payload: text })
        textValue.current?.focus()
        setText('')
        setCount(0)
      }
    }
  }

  function onChangeHandler(e: React.SyntheticEvent) {
    const target = e.target as HTMLTextAreaElement

    if (count < 155) {
      setText(target.value)
      setCount(target.textLength)
    }
  }

  return (
    <Card className="input">
      <textarea
        onChange={onChangeHandler}
        className="input__textarea"
        ref={textValue}
        value={text}
        placeholder="Enter text here"
      ></textarea>
      <div className="input__control">
        <span>{count} / 155</span>
        <button onClick={onClickHandler}>Save</button>
      </div>
    </Card>
  )
}

export default Input
