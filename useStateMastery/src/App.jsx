import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function initialvalue (){
    console.log('Running initial value function');
    return 4;
  }
  // const [count, setCount] = useState(() => initialvalue()) // executes only once
  // const [count, setCount] = useState(initialvalue()) // executes at every render
  // const [count, setCount] = useState(() => {  // executes only once
  //   console.log("Executed");
  //   return 4;
  // })
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }
  // useEffect(() => {
  //   console.log("UseEffect called");
  // },[]);
  // useEffect(() => {
  //   console.log("UseEffect called");
  // });
  useEffect(() => {
    console.log("UseEffect called");
  },[count]);
  // useEffect(() => {},[])

  return (
    <>
      <div className='text-3xl'>useState Mastery</div>
      <div className='text-3xl'>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
