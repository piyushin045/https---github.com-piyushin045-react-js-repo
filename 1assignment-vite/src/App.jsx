import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  // the below function is defined for addvalue
  const addValue = function (){
    if(counter<20){
    setCounter(counter+1)}

    /// for  setCounter(counter => counter+1)
        /// for  setCounter(counter => counter+1)
        /// for  setCounter(counter => counter+1)
        /// for  setCounter(counter => counter+1)
        /// for  setCounter(counter => counter+1)

  }
// this is for reduce function
const reduceValue = function(){
  if(counter>0){
  setCounter(counter-1)}
}
  return (
    <>
     <div>
      <h1>First react project</h1>
      <h2>CounterValue:-{counter}</h2>

      <button onClick={addValue}>AddValue:-{counter}</button>
      <br/><br/>
      <button onClick={reduceValue}>ReduceValue:-{counter}</button>

      <footer>counter:-{counter}</footer>
     </div>
    </>
  )
}

export default App
