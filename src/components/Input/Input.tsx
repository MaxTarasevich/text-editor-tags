import React, { FC, useRef } from 'react'

import './Input.scss'

interface Props {
  onAddData: (newData: string) => void
}

const Input: FC<Props> = ({ onAddData }) => {
  const textValue = useRef<HTMLTextAreaElement | null>(null)

  function onClickHandler() {
    if (textValue.current) {
      onAddData(textValue.current.value)
      textValue.current.value = ''
      textValue.current.focus()
    }
  }

  return (
    <div>
      <textarea ref={textValue} placeholder="Enter text here"></textarea>
      <button onClick={onClickHandler}>Ok</button>
    </div>
  )
}

export default Input
