import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    console.log("Value Added: ", Math.ceil(Math.random() * 10));    
    counter += 1;
    console.log("Counter: ", counter);
    setCounter(counter);
  }
  const reduceValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={reduceValue}>Reduce Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
