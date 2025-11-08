import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ludo from './Ludo'
import Todo from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Ludo></Ludo> */}
     <Todo></Todo>
    </>
  )
}

export default App
