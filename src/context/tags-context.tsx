import { createContext } from 'react'
import { Data } from '../interface/data'

interface TagsContext {
  sortedTags: { sortedNotes: Data[], tag: string }
  onsortByTags: (tag: string) => void
}

const tagsContext = createContext<TagsContext | null>(null)

export default tagsContext
