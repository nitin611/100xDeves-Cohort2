const express=require("express")

const jwt=require("jsonwebtoken")
const app=express()

app.use(express.json())

// user array create karo-
const users=[];
const jwtkey="1239865";

// create the post request for signup route-
app.post("/signup",(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    // check if user already signup or not-
    if(users.find((user)=>user.username===username)){
        return res.json({
            msg:"User already exists"
        })
    }

    // check if username has min 5 char-
    if(username.length<5){
        return res.json({
            msg:"Username should have min 5 chars"
        })
    }
    // user ko user array me add karo-
    users.push({
        username:username,
        password:password,
    })
    res.json({
        msg:"user added successfully!!"
    })

});
// create a post request for sign-in route-
app.post("/sign-in",(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    // check if user is there in the array-
    const findUser=users.find((user) => user.username===username && user.password===password)

    if(findUser){
        // create token using jwt.sign()-
        const token=jwt.sign({username},jwtkey);
        return res.json({
            token:token,
            msg:"You have signed in successfully!!"
        });
    }
    else{
        // Send a response to the client that the user is not found
        res.json({
            msg:"Invalid username or password"
        })
    }
});
// create a get request as user has now token so user will now share the username,pass,jwtToken-
// we will verify the token and if verified then we will send the username and password from our db{array}
app.get("/me",(req,res)=>{
    const token=req.headers.authorization;

    // check if token is present or not in the user-resonse-
    if(!token){
        return res.json({
            msg:"Token is missing"
        })
    }
    // verify the token using jwt.verify
    try {
        const userDetail=jwt.verify(token,jwtkey);
        
    } catch (err) {
        console.log("token verification failed",err.message)
    }
     // Find the user in the users array with the given username-
    const foundUser=users.find((user)=>user.username===userDetail.username)
    if(foundUser){
        return res.json({
            username:foundUser.username,
            password:foundUser.password,
        })
    }
    else{
        return res.json({
            msg:"Invalid token!!"
        })
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
