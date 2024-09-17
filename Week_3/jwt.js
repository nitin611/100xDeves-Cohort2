// post endpoint- user post username and password both are "String", create user inmemoryDatabases.
// And then return json web token with username encrypted,
// 
// Get- This expect the authorisation header,if the authorisation is correct then send
// An array of all users if user is singed in (Token is correct)
// else - RETURN 403 error

const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="1234567";

const app=express();
app.use(express.json());
const ALL_USERS=[
    {
        username:"jhanitin906@gmail.com",
        password:"12345",
        name:"Nitin kumar",

    },
    {
        username:"aditya@123gmail.com",
        password:"123",
        name:"Aditya kumar",
    },
    {
        username:"deepika89@gmail.com",
        password:"890",
        name:"Deepika suman",
    },
];

function userExists(username,password){

    let userExists=false;

    // can do using find also - write now doing with for loop by iterating over all the users-
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists=true;
            
        }
    }

    return userExists;
}
//  This is the implementation of generation of token if the username and Password is correct the user will get the 
//  token. If it is not token will not be generated it means , username or password is incorrect.
app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User does not exist in our db",
        });
    }
    var token=jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });
});

// In this as We have generated the token we will pass the verify(token,jwtPassword)
// ---------------------------------------------AUTHENTICATION--------------------------------------
app.get("/users",(req,res)=>{
    const token=req.headers.authorization;
    try {
        const decode=jwt.verify(token,jwtPassword);
        // this decoded has two field - username, iot field so we will get the username Field from that.
        const username=decode.username;
        // return the list of users other than this username-
        res.json({
            users:ALL_USERS.filter(function(value){
                if(value.username==username){
                    return false;
                }
                else {
                    return true;
                }
            })
        })
    } 
    catch (err) {
        return res.status(403).json({
            msg:"Invalid token entered !",
        })
    }
   
})

app.listen(5000);