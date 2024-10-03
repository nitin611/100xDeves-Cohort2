
import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState()

  // -----------------------refHook- ye copy button  aur kya copy karna hai use beech me refrence nikalne ke liye
  // use hota hai like input aur button ke beech me refrence chahiye------

  const passwordRef=useRef(null)

  // yaha pe bhi copyPasswordToClipBoard ko useCallback ke andar wrap kar sakte hai taki wo hamesa re-render na ho
  // specific time pe hi re-render ho-
  const copyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    // ye selection range only 0-50 tak hi select karega ---
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])


  // password - generator-
  // ye useEffect only cahce me rakhta hai run ni karta
  // ----------------------------useCallback(fn,[])- fn aur array as a input leta hai usecallback---------------

  const PasswordGenerator=useCallback(()=>{
      let pass="";

      
      let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) string+="0123456789"
      if(char)string+="!@$%&*[]{}()"

      // yaha is string me loop chalao length ke itna and random password generate karo 
      for(let i=0;i<=length;i++){
        let char=Math.floor(Math.random()*string.length+1)
        pass+=string.charAt(char)

      }
      setPassword(pass)

  },[length,numberAllowed,char,setPassword]);

  // ------------------------useEffect hook for calling passwordGenerator function-----------------
  // yahan useEffect ke andar function call kar rahe hai taki infinite re-render na ho, 
  useEffect(()=>{
    PasswordGenerator()
  },[length,char,numberAllowed,setPassword])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex rounded-3xl shadow  overflow-hidden my-3'>
        <input
         type="text" 
         ref={passwordRef}
         value={password}
         placeholder='password'
         className='outline-none w-full py-1 px-3'
         />

         <button 
         onClick={copyPasswordToClipBoard}
         className='bg-blue-600 text-white px-3 py-1 shrink-0 outline-none hover:bg-blue-800'>
          Copy</button>
      </div>
      <div className='flex gap-x-2 '>
        {/* ------------------------------range------------------ */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        {/* ----------------------------numbers------------------------ */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)

          }}
           />
           <label htmlFor='number input'>Numbers</label>
        </div>
        {/* --------------------------characters----------------------------- */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={char}
          onChange={()=>{setChar((prev)=>!prev)
            
          }}
           />
           <label htmlFor='number input'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
