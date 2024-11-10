import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme.js'
import ThemeBtn from './components/ThemeButton.jsx'
import Card from './components/Card.jsx'

function App() {
  const[themeMode,setThemeMode]=useState()

  // methods define karte hai-
  const lightTheme=()=>{
    setThemeMode("light")

  }
  const darkTheme=()=>{
    setThemeMode("dark")

  }

  // actual change in theme using js-
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode]);


  return (
//  wrap with themeprovider and get the access of the values from the contextApi-

<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center bg-gray-100 p-6">
  <div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
      {/* Theme Button */}
      <ThemeBtn />
    </div>

    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2">
      {/* Card Grid */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
        <Card className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out" />
      </div>
    </div>
  </div>
</div>

</ThemeProvider>


  )
}

export default App
