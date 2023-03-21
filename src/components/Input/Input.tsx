import { FC, useRef, useState } from 'react'
import Card from '../Card/Card'

import './Input.scss'

interface Props {
  onAddData: (newData: string) => void
}

const Input: FC<Props> = ({ onAddData }) => {
  const textValue = useRef<HTMLTextAreaElement | null>(null)

  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  function onClickHandler() {
    if (text.trim().length) {
      onAddData(text)
      textValue.current?.focus()
      setText('')
      setCount(0)
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
