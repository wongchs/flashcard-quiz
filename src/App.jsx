import { useState } from 'react'
import FlashcardPage from './components/FlashcardPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlashcardPage />
    </>
  )
}

export default App
