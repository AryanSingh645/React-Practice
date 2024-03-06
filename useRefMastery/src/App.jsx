import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  // const [renderCount, setrenderCount] = useState(0);
  const renderCount = useRef(0);
  useEffect(() => {
    console.log("inside useEffect");
    // setrenderCount(prevValue => prevValue + 1);
    renderCount.current += 1;
    console.log("useEffect called renderCount: ",renderCount.current);
  },[name]);
  // console.log("Render",renderCount);
  console.log("Render",renderCount.current);
  
  return (
    <>
      <input
      type="text" 
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }} 
      className='border-black border-2 text-4xl py-2 px-2' />
      <div>My name is {name}</div>
      <div>Render Count: {renderCount.current} </div>
      {/* <div>Render Count: {renderCount} </div> */}
    </>
  )
}

export default App
