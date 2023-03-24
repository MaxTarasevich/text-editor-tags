import { useEffect, useReducer, useState } from 'react'

import './App.scss'

import { Card, Input, Notes, Tags } from './components'

import dataJson from './data/data.json'

import { Data } from './interface/data'

import { notesReduser } from './reduser/notesReduser'

import tagsContext from './context/tags-context'

function App() {
  const initialReduserState: Data[] = []

  const [notes, dispatchNotes] = useReducer(notesReduser, initialReduserState)

  const [sortedByTags, setSortedByTags] = useState({
    sortedNotes: initialReduserState,
    tag: '',
  })

  useEffect(() => {
    setTimeout(() => {
      dispatchNotes({ type: 'load', payload: dataJson })
    }, 500)
  }, [])

  const tags = [...new Set(notes.map((note) => note.tags).flat())]

  function sortByTagsHandler(tag: string) {
    setSortedByTags({
      sortedNotes: notes.filter((note) => note.tags.includes(tag)),
      tag: tag,
    })
  }

  return (
    <main className="app container">
      <h1>Text editor with tags</h1>

      <Input updateNotes={dispatchNotes} />

      <tagsContext.Provider
        value={{
          sortedTags: sortedByTags,
          onsortByTags: sortByTagsHandler,
        }}
      >
        <Card>
          <Tags tags={tags} classNames="tags-bigFont" />
          {sortedByTags.tag && (
            <div className="tags-control">
              <div
                onClick={() =>
                  setSortedByTags({
                    sortedNotes: initialReduserState,
                    tag: '',
                  })
                }
              >
                View all
              </div>
              <div>Sorted By : {sortedByTags.tag}</div>
            </div>
          )}
        </Card>

        <Notes data={notes} updateNotes={dispatchNotes} />
      </tagsContext.Provider>
    </main>
  )
}

export default App
