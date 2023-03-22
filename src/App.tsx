import { useEffect, useState } from 'react'
import './App.scss'

import dataJson from './data/data.json'

import Card from './components/Card/Card'
import Input from './components/Input/Input'

import Notes from './components/Notes/Notes'
import { Data } from './interface/data'

function App() {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    setTimeout(() => {
      setData(dataJson)
    }, 500)
  }, [])

  function addDataHandler(newData: string) {
    const dataObj = {
      id: Number(new Date()),
      text: newData,
      tags: [''],
    }
    setData((prevData) => [...prevData, dataObj])
  }

  function deleteDataHandler(id: number) {
    setData((prevData) => prevData.filter((el) => el.id !== id))
  }

  function editDataHandler(id: number, newText: string) {
    setData((prevData) =>
      prevData.map((el) => {
        if (el.id === id) {
          return { ...el, text: newText }
        }
        return el
      })
    )
  }

  return (
    <main className="app container">
      <h1>Text editor with tags</h1>

      <Input onAddData={addDataHandler} />

      <Card>Tags for sorting</Card>

      <Notes
        data={data}
        onDeleteData={deleteDataHandler}
        onEditData={editDataHandler}
      />
    </main>
  )
}

export default App
