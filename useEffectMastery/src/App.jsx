import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [size, setSize] = useState(window.innerWidth)
  // useEffect(() => {
  //   console.log('resized');
  //   window.addEventListener('resize',function handlesize(){
  //     setSize(window.innerWidth);
  //     console.log('handlesize function called');
  //   });
  // },[])
  // useEffect(() => {
  //   console.log('resized');
  //   window.addEventListener('resize',function handlesize(){
  //     setSize(window.innerWidth);
  //     console.log('handlesize function called');
  //   });
  // })
  // useEffect(() => {
  //   console.log('resized');
  //   window.addEventListener('resize',function handlesize(){
  //     setSize(window.innerWidth);
  //     console.log('handlesize function called');
  //   });
  //   // //clean up function
  //   return () => {
  //     console.log('cleanup function called');
  //   }
  // })
  console.log('outside useEffect');
  useEffect(() => {
    console.log('resized');
    window.addEventListener('resize',function handlesize(){
      setSize(window.innerWidth);
      console.log('handlesize function called');
    });
    // //clean up function
    return () => {
      console.log('cleanup function called');
    }
  },[])
 

  return (
    <>
      <div className='text-4xl'>{size}</div>
    </>
  )
}

export default App
