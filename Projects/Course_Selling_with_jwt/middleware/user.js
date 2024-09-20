const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");





function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ msg: "Authorization header missing" });
    }
    // The Authorization header should be in the format: Bearer <token>
    const tokenParts = authHeader.split(" ");
    
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ msg: "Invalid Authorization format" });
    }

    const jwtToken = tokenParts[1];

    try {
        const decoded = jwt.verify(jwtToken, jwt_secret);
        if(decoded.username){
            // send username to the route from here-
            req.username = decoded.username;
            next();
        }
        else{
            return res.status(403).json({
                msg: "Username or password is incorrect"
            });
        }
    } 
    catch (err) {
        return res.status(403).json({
            msg: "Invalid or expired token",
            error: err.message
        });
    }


}

module.exports = userMiddleware;