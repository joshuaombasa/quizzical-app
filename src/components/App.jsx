import { useState } from 'react'

import Homepage from './Homepage'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
