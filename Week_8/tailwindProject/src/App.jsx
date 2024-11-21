import { useState } from 'react'

import './App.css'
import RevenueCard from './Component/RevenueCard.jsx';
import WhiteCard from './Component/WhiteCard';

function App() {
  const [count, setCount] = useState(0)

  return (

   <div className='grid gap-1 w-1/4'>
    <RevenueCard title={"Next payout"} amount={"2,232.54"} orderCount={42}/>
    <WhiteCard title={"Amount Pending"} amount={"900.38"} orderCount={10} />
    {/* <WhiteCard title={"Amount Pending"} amount={"900.38"} orderCount={10} /> */}
   </div>

  )
}

export default App
