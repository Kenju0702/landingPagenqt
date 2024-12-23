import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>hello</Button>
      <h1 className='text-red-100'>hello</h1>
    </>
  )
}

export default App
