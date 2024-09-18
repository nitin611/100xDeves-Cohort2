

/**
 * Assignment #2 - Write a function that takes a jwt as input and returns 
 * true if the jwt can be DECODED (not verified). Return false otherwise
 */
const jwt = require("jsonwebtoken");

function decodejwt(token){

    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

const ans=decodejwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpoYW5pdGluOTA2QGdtYWlsLmNvbSIsImlhdCI6MTcyNjYzODgxMn0.YKzuOACO2aBY02_i4iET8Il2gi_NxzfdLMtQ9RjJQNk")

console.log(ans);