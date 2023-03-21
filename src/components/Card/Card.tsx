import React from 'react'

import './Card.scss'

interface Props {
  className?: string
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={`card ${className ? className : ''}`}>{children}</div>
}

export default Card
