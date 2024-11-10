import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // yaha pe hamlog ko  data lena hai na ki method so user pass karwaye hai context api ki madad se
    // so yaha user se data aajayega-
    const {user}=useContext(UserContext)

    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
