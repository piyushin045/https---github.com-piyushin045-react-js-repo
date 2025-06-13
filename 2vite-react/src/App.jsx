import { useState } from 'react' // / from this the hoks are imported to react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15) // IS RESPONSIBLE FOR CHANGE IN STATE OF THE DOM
  // we can put anything inside the () [counter,function (usually setCounter)]
  // let counter = 15
  const addValue = function(){
    //counter = counter+1
    setCounter(counter +1)// or setcounter(counter)
    //  because we have updated the value of counter above
    console.log("clicked",counter);
  }

  const removeValue = function(){
    
    
    setCounter(counter -1)
    console.log("clicked",counter);
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addValue}
    >add value{counter}</button>
    <br/>
    <button onClick={removeValue}>decrease value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
