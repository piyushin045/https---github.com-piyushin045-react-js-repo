import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'



function App() {
  

  return (
    <>
      <h1>This is reduxtoolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
