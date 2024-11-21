import { useState } from 'react'
import './App.css'
import { Counter } from './Components/Counter'
import { UserData } from './Components/UserData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
      <h1>Counter App</h1>
      <Counter/>
      </div>
      <div>
        <UserData/>
      </div>
    </div>
  )
}

export default App
