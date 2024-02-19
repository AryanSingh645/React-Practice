import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 rounded-lg mb-4'>Tailwind css</h1>
      <Card userName = "aryan" btntext='Click Me'/>
      <Card userName = "deepak"/>
    </>
  )

}

export default App
