import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// state, components-


function App() {
  const [count,setCount]=useState(0);
  
  return (
    <div>
    <CounterButton count={count} setCount={setCount}></CounterButton>
    </div>
  )
}
// making our own components and calling these components from the main app-
function CounterButton(props){
  const  onClickHandler=()=>{
    // re-rendering the setCount-
    props.setCount(props.count+1)
  }
 
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>

}


export default App
