import { useState } from 'react'
import './App.css'



// here we are creating counter application with propdrilling without using context Api-
// in this we have to pass setCount to its every child jabki usko use bhi nahi karna firbhi taki niche wale child tak
// pahuch sake then last child can use it. 
// so problem in this is that code become verbose faltu me extra karne ki jarurat hai.

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//    <div>
//     {/* yaha pe faltu me setCount ko Count ke andar use karna par raha taki wo button ke andar ja sake and
//     then use below child me it become very big in large webapplication. */}
//     <Count count={count} setCount={setCount}/>
  
//    </div>
//   )
// }

// function Count({count,setCount}){
//   return <div>
//     {count}
//     <Buttons count={count} setCount={setCount}/>
//   </div>

// }
// // here we need setCOunt to use but count ke andar faltu me para hai this is propdrilling parent has to think about
// // child,grandchild,greatgreat,grandchild and more...
// function Buttons({count,setCount}){
// return <div>
//   <button onClick={()=>{
//     setCount(count+1)
//   }}>Increase</button>

//   <button onClick={()=>{
//     setCount(count-1)
//   }}>Decrease</button>
// </div>

// }

// -------------------------------ContextApi---------------------------------------------------------------

function App(){
  return <div>
    
  </div>
}

export default App
