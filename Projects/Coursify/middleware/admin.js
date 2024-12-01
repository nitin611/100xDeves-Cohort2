const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");  // Assuming jwt_secret is properly exported from config

// Middleware for handling admin authentication
function adminMiddleware(req, res, next) {
    // Check if the Authorization header is present
    // in header now we are sending the token not username or password to verify the user , it reduces 1 db call 
    // As now we dont have to go to db to check if user is there or not after sign in just check with jwt-
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
        // Verify the token
        const decoded = jwt.verify(jwtToken, jwt_secret);

        // Check if the decoded token contains a valid username
        if (decoded.username) {
            // Continue to the next middleware or route handler
            next();
        } else {
            return res.status(403).json({
                msg: "Username or password is incorrect"
            });
        }
    } catch (err) {
        // Handle errors during verification (e.g., token expired, invalid token)
        return res.status(403).json({
            msg: "Invalid or expired token",
            error: err.message
        });
    }
}

module.exports = adminMiddleware;
