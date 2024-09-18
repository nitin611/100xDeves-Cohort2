const jwt=require("jsonwebtoken")
const jwtPassword="12345";
/**
 * Assignment #3 - Write a function that takes a jwt as input and returns
 * true if the jwt can be VERIFIED. Return false otherewise
 */



// jwt.verify(token,jwtPassword)
function jwtverify(token){
        try {
            const verified=jwt.verify(token,jwtPassword);
            return true;
        } catch (err) {
            console.log("token verification failed",err.message)
            return false
        }
}

const ans=jwtverify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpoYW5pdGluOTA2QGdtYWlsLmNvbSIsImlhdCI6MTcyNjYzOTc3OH0.ylLHpLv77H4tZAanKGJ6qOB9XEyrsBr_Uk4wWxrFikQ")
console.log(ans);