import { useState } from 'react'
import TikTakTo from './components/TikTakTo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TikTakTo/>
    </>
  )
}

export default App
