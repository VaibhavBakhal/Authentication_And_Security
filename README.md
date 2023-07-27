# Authentication and Security (using Node.js and Express.js)

This repository demonstrates various levels of authentication and security implementations using Node.js and Express.js. Each level represents an upgrade in security features.

## Level 1: Basic Authentication with MongoDB

In this level, we save the username and password in the MongoDB database as a normal String. During login, we cross-check the credentials with the database.

## Level 2: Mongoose-encryption

At this level, we introduce the Mongoose-encryption package, which provides field-level encryption for sensitive data in the MongoDB. It enhances security by encrypting the password field in the database.

## Level 3: Hashing with md5

To improve security further, we implement hashing using the md5 algorithm. Hashing converts the password into a fixed-size hash, making it challenging to reverse-engineer the original password.

## Level 4: Hashing and Salting with bcrypt

In this level, we enhance security by using the bcrypt package for hashing and salting passwords. Salting adds random data to the hashed password, making it even more resistant to attacks.

## Level 5: Passport and Express-Session

At this stage, we integrate passport, passport-local, and passport-local-mongoose packages along with express-session for user authentication. Passport provides a flexible and modular approach to authentication.

## Level 6: OAuth 2.0 with Google Sign-In

In the final level, we build upon Level 5 and add OAuth 2.0 authentication for sign-in through Google. Users can now sign in using their Google accounts, improving user experience and security.

Each level's implementation builds on the previous one, showing the evolution of security practices. Feel free to explore each level to understand the different authentication and security mechanisms in Node.js and Express.js.

For more details and code samples, check out the code and documentation in each level's corresponding folder.

**Note:** This repository is meant for educational purposes and to demonstrate the step-by-step improvement of security features. Always ensure best practices are followed when implementing authentication and security in real-world applications.
