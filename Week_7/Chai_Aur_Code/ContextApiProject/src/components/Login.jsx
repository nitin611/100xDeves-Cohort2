import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('');

  // ye hai ki kaise data bhejte hai contextapi me-
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
      // by default post method ke through value kahi na kahi chali jati hai isliye isko e.preventDefault use karte hai
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text'
        value={username}
        // koi bhi event ho to ish username ko change kar dijiye-
        onChange={(e)=>setUsername(e.target.value)}
       placeholder='username'/>
      <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
