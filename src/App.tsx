import { useEffect, useState } from 'react'
import './App.scss'

import dataJson from './data/data.json'

import Card from './components/Card/Card'
import Input from './components/Input/Input'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setTimeout(() => {
      console.log(dataJson)
    }, 500)
  }, [])

  return (
    <main className="app container">
      <h1>Text editor with tags</h1>
      <Card>
        <Input />
      </Card>
      <Card>Tags for sorting</Card>
      <Card>List of notes</Card>
    </main>
  )
}

export default App
