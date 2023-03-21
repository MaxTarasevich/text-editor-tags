import { useEffect, useState } from 'react'
import './App.scss'

import dataJson from './data/data.json'

import Card from './components/Card/Card'
import Input from './components/Input/Input'
import Note from './components/Notes/Note'
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

  return (
    <main className="app container">
      <h1>Text editor with tags</h1>

      <Input onAddData={addDataHandler} />

      <Card>Tags for sorting</Card>
      <Notes data={data} />
    </main>
  )
}

export default App
