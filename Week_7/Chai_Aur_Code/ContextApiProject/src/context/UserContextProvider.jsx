
import React from "react";
import UserContext from "./UserContext";


// this is a method usercontextprovider- 
// jo bhi children matlab jo bhi naam pass ho raha usko aage paas kardo-
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        // kon si value ko pass kar rahe hai so as a object apss karo children ko multiple objects-
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider
// ye hai provider isko jsx banana parta hai taki sare pages ko isse wrap kar sake -