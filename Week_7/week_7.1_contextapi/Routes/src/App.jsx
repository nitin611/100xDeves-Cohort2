import { Suspense, lazy,useState } from 'react'
import './App.css'
// import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'

// lazy loading-
const Dashboard=lazy(()=>import('./components/Dashboard'))
function App() {
 
  return (
  <div>
    {/* here we have created 2 buttons , and try to navigate between, firstly we used window.location but in that
    the whole html,cssand js is refetching and showing the result so we used useNavigate hook in react.

    But useNavigate should be used inside BrowserRouter only not outside it like route can be used inside it only
    similarly. so we will define another component Appbar and will use it inside BrowserRoutwer. */}
    {/* <button onClick={()=>{
      navigate("/")
    }}>Landing page</button>

    <button onClick={()=>{
      // window.location.href="/dashboard"
      navigate("/dashboard")
    }}>Dashboard </button> */}

     <BrowserRouter>
     <Appbar/>
  <Routes>
   
    <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}>
    
    </Route>
   
    <Route path="/" element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>

 
  )
}
function Appbar(){
  const navigate =useNavigate()

  return <div>
    <button onClick={()=>{
    navigate("/")
  }}>Landing page</button>

  <button onClick={()=>{
    // window.location.href="/dashboard"
    navigate("/dashboard")
  }}>Dashboard </button>
  </div>
  
}

// now we will learn routing optimization with LAZY LOADING---------------------------
// wrap the  <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}</Route>


export default App
