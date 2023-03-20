import React from 'react'

import './Card.scss'

interface Props {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className='card'>{children}</div>
}

export default Card