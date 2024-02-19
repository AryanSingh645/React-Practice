import { useCallback, useEffect, useState, useRef} from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() =>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i = 0; i < length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select(); // To highlight the selected text
    passwordRef.current?.setSelectionRange(0,4); 
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(passwordGenerator, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-gray-700 max-w-md w-full rounded-lg py-2 mx-auto mt-24 flex flex-col gap-3">
        <div className="text-center text-white text-2xl my-2"><p>Password Generator</p></div>
        <div className="flex justify-center gap-1 px-7">
          <input 
          type="text" 
          placeholder="Password" 
          readOnly 
          ref={passwordRef}
          value={password} 
          id="" 
          className="outline-none rounded-lg p-1 w-full" 
          />

          <button 
          onClick={copyToClipboard} 
          className="text-white bg-blue-700 py-1 rounded-lg px-2 hover:bg-blue-800">
          Copy</button>
        </div>
        <div className="flex justify-center gap-2 text-orange-500 w-full transition-all duration-500">
          {/* length slider */}
          <div className="flex gap-2">
            <input 
            className="cursor-pointer"
            type="range" 
            name="slider" 
            id="slider" 
            min={6} 
            max={100} 
            value={length} 
            onChange={(e) => {
              setLength(e.target.value)
              }}
            />
            <label htmlFor="slider">Length: {length}</label>
          </div>

          {/* Number checkbox */}
          <div className="flex gap-1">
            <input 
            type="checkbox"
            id="numberInput"
            defaultChecked = {numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
              }
            } 
            className="cursor-pointer"
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          {/* Characters checkbox */}
          <div className="flex gap-1">
            <input 
            type="checkbox"
            id="charInput" 
            defaultChecked = {charAllowed} 
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }} 
            className="cursor-pointer" 
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
