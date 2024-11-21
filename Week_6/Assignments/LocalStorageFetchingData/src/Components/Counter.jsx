import React,{useState,useEffect} from 'react'

export const Counter = () => {
   const [count, setCount] = useState(() => {
        // Get saved count from local storage and display it on re-fresh from local storage
        const savedCount = localStorage.getItem("count");

        // Return the saved count if it exists, otherwise return 0
        return savedCount ? parseInt(savedCount, 10) : 0;
    });
    // saving count value in local storage-
    useEffect(()=>{
        localStorage.setItem("count",count)
    },[count])

    const addCount=()=>{
       setCount((count)=>count+1)
    }
    const reduceCount=()=>{
        setCount((count)=>count-1)
    }
  return (
    <div>
        <p className='flex flex-auto'>Counter: {count}</p>
        <button onClick={addCount}>AddCount</button>
        <button onClick={reduceCount}>SubCount</button>
    </div>
  )
}
