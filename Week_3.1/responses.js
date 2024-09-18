// -------With this we dont have to 

const express = require('express');
const responseHelper = require('express-response-helper');

const app = express();

// Create a database for users
const database = [
  {
    username: 'user1',
    email: 'user1@fake.com',
    password: 'test1',
  }
];

// A function for validating email addresses
const validEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// A function to check if a username is unique
const isUsernameUnique = username => {
  let isUnique = true;

  database.forEach(user => {
    if (user.username === username)
      isUnique = false;
  });

  return isUnique;
};

// A function to check if an email is unique
const isEmailUnique = email => {
  let isUnique = true;

  database.forEach(user => {
    if (user.email === email.toLowerCase())
      isUnique = false;
  });

  return isUnique;
};

// A function that returns a the index of a user data given the username
const findUser = username => {
  return database.findIndex(user => {
    return user.username === username;
  });
};

// Configure the middlewares
app.use(responseHelper.helper());
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.respondNoContent();
});

// To add a user
app.post('/user', (req, res) => {
  const body = req.body;
  if (body.username && body.email && body.password) {
    // Make sure the username and email is unique

    if (!isUsernameUnique(body.username)) {
      // Duplicate username
      res.failValidationError('username is taken.');
      return;
    }

    if (!isEmailUnique(body.email)) {
      // Duplicate email
      res.failValidationError('email is taken.');
      return;
    }

    // Insert the user
    const user = {
      username: body.username,
      email: body.email.toLowerCase(),
      password: body.password,
    };

    // Add to the database
    database.push(user);

    // Return a response confirming creation
    res.respondCreated('User Account Created!');
  }
  else {
    // If some or all the required data is not provided, return a failed response
    res.failValidationError('Please provide all required data!');
  }
});

// To update a user
app.put('/user/:username', (req, res) => {
  // Find the user
  const index = findUser(req.params.username);
  const body = req.body;

  if (index !== -1) {
    if (body.email) {
      // Get the user
      const user = database[index];

      // If the email equals the current one, do nothing
      if (body.email === user.email) {
        // Return a response confirming update
        res.respondUpdated('User account updated.');
      }
      else {
        // Make sure the email is unqiue
        if (!isEmailUnique(body.email)) {
          // Duplicate email
          res.failValidationError('email is taken.');
          return;
        }

        // Update the email
        user.email = body.email;

        // Return a response confirming update
        res.respondUpdated('User account updated.');
      }
    }
    else {
      // Return a failed response
      res.failValidationError('Please provide all required data!');
    }
  }
  else {
    // User not found.
    res.failNotFound('No user with such username exists!');
  }
});

// To remove a user
app.delete('/user/:username', (req, res) => {
  // Find the user
  const index = findUser(req.params.username);

  if (index !== -1) {
    // Remove the user
    database.splice(index);

    // Return a response confirming removal
    res.respondDeleted('User removed!');
  }
  else {
    // User not found.
    res.failNotFound('No user with such username exists!');
  }
});

// To authenticate a user
app.post('/login', (req, res) => {
  const body = req.body;
  if (body.username && body.password) {
    // Make sure the username and email is unique

    // Find the user
    const index = findUser(body.username);

    if (index !== -1) {
      // Get the user 
      const user = database[index];

      // Authenticate
      if (user.password === body.password) {
        // Authenticated, return basic user data
        res.respond({ username: user.username, email: user.email });
      }
      else {
        // return a response indicating that access is denied
        res.failUnathorized('Invalid password!');
      }
    }
    else {
      // User not found.
      res.failNotFound('No user with such username exists!');
    }
  }
  else {
    // If some or all the required data is not provided, return a failed response
    res.failValidationError('Please provide all required data!');
  }
});

app.listen(3000, () => {
  console.log('Server running...');
});