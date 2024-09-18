// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

const jwt=require('jsonwebtoken')
const zod=require('zod')

// define the jwt secret key 
const jwtPassword = "123456";

// schema with zod-
const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

// function to sign the jwt token-
function signjwt(username,password){
    const usernameRes=emailSchema.safeParse(username)
    const passwordRes=passwordSchema.safeParse(password)

    // if email or the password is not valid-
    if(!usernameRes.success || !passwordRes.success){
        console.log("The username or password is not valid, kindly enter strings")
        return
    };
    // if email and password is valid sign the jwt token-
    const signature=jwt.sign({username},jwtPassword)

    return signature;
}


const ans=signjwt("jhanitin906@gmail.com","nitin23");
console.log(ans);