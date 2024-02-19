import { useState } from "react"

function App() {
  const [color, setColor] = useState("#000");
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
    <div className="bottom-10 flex absolute justify-center w-full">
      <div className="flex gap-7 bg-white shadow-lg rounded-lg px-2 py-1">
        <button className="bg-red-600 p-2 rounded-lg" onClick={() => setColor("Red")}>Red</button>
        <button className="bg-green-600 p-2 rounded-lg" onClick={() => setColor("Green")}>Green</button>
        <button className="bg-[#BAB86C] p-2 rounded-lg" onClick={() => setColor("#BAB86C")}>Olive</button>
        <button className="bg-yellow-400 p-2 rounded-lg" onClick={() => setColor("Yellow")}>Yellow</button>
        <button className="bg-purple-600 p-2 rounded-lg" onClick={() => setColor("Purple")}>Purple</button>
      </div>
    </div>
    </>
  )
}

export default App
