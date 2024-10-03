const bcrypt = require("bcrypt");

// Function to hash a password
const hashPassword = (password) => {
    const saltRounds = 10; 
    return bcrypt.hashSync(password, saltRounds);
};

// Function to compare a password with a hashed password
const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
    hashPassword,
    comparePassword
};
