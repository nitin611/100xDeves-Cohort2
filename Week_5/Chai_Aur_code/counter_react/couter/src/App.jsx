import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // why hooks-
  // because it render element at same time to all the elements.while js cant -so use hooks
  // -----------------------------hooks----------
  // yaha hooks me useState()ke andar function chor ke avi ke liye aur kuch bhi input daal sakte hai
  // ex- number,array,object,etc..
  let [counter,setCounter]=useState(15);

  // let counter=5;

  const addvalue=()=>{
    // console.log("clicked",counter)
   
    if(counter>=20)return;
    else{
      counter=counter+1;
    }
    setCounter(counter)
    
  }
  const removeValue=()=>{
    if(counter<=0)return 
    else{
      setCounter(counter-1)
    }
  }
  return (
   <div>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>
    <br />
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
   </div>
  )
}

export default App
