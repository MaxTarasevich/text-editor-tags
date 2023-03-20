import React from 'react'

interface Props {
  title: string
}

const Note: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>
}

export default Note
