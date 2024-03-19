import { useCallback, useMemo, useState } from 'react'
import './App.css'
import List from './List';

function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);
  const color = theme? "bg-gray-800" : "bg-gray-300";
  const getItems = useMemo(() => {
    console.log('getItems function called');
    return [number, number + 1, number + 2];
  },[number]);
  // const getItems = useCallback(() => {
  //   console.log('getItems function called');
  //   return [number, number + 1, number + 2];
  // },[number]);

  return (
    <>
      <input
      type="text" 
      value={number? number : 0} 
      className='border-2'
      onChange={(e) => setNumber(parseInt(e.target.value))} 
      />
      <div className = {`w-full h-20 ${color}`}></div>
      <button className='border-2 p-2 bg-gray-500' onClick={() => {
        setTheme((prev) => (!prev));
      }}>Change Theme</button>

      <List getItems={getItems} />
    </>
  )
}

export default App
