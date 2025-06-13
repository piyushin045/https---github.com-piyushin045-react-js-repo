import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewCard from './components/NewCard'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username:"hitesh",age:21
}
  return (
    <>
    <h1 className='bg-green-400 p-4 text-black rounded-xl'>tailwind test</h1>
      
      <NewCard username="chaiaurcode" someObject={myObj}/>
      <NewCard username="hi-2-hii"/>
     


    </>
  )
}

export default App
