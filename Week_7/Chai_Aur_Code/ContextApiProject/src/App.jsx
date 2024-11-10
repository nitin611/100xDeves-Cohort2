import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    // jo bhi component iske andar banayenge to uska access mil jayega contextapi ko-
 <UserContextProvider>
  
  <h1>Learning context api</h1>
  <Login/>
  <Profile/>
 </UserContextProvider>
  )
}

export default App
