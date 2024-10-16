import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
 

  return (
   <div className='flex justify-center gap-10 min-h-screen w-100'>
    <Card/>
    <Card/>
    <Card/>
   </div>
  )
}

export default App
