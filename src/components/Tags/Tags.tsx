import { FC, useContext } from 'react'
import tagsContext from '../../context/tags-context'

import './Tags.scss'

interface Props {
  tags: string[]
  classNames?: string
}

const Tags: FC<Props> = ({ tags, classNames }) => {
  const context = useContext(tagsContext)

  return (
    <div className={`tags ${classNames}`}>
      {!tags.length ? (
        <span>No tags</span>
      ) : (
        tags.map((tag, index) => (
          <span
            key={index}
            onClick={() => {
              context?.onsortByTags(tag)
            }}
          >
            {tag}
          </span>
        ))
      )}
    </div>
  )
}

export default Tags
