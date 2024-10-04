import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()

    // // calling github api to show the followers of the profile-
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nitin611')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (

    <div className='text-center m-6 p-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-lg'>
    <div className='text-4xl font-semibold mb-4'>
        GitHub Followers: <span className='text-yellow-400'>{data.followers}</span>
    </div>
    <div className='flex justify-center items-center'>
        <img
            src={data.avatar_url}
            alt='GitHub Profile'
            className='rounded-full border-4 border-gray-300 shadow-md hover:shadow-xl transition duration-300 ease-in-out'
            width={200}
            height={200}
        />
    </div>
</div>

  )
}

export default Github

// using loder of react-router-dom to optimize the fetch call-
// loder jab curosor ko leke jaate hai tabhi fetch karne lagta hai and memoization bhi rakhta hai so it is more
// optimise way---

export const githubinfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/nitin611');
    return response.json();
}
