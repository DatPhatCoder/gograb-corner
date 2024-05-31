/*
Input:
Output:

For getting location data for the front end. Not sure if needed

demo - authController - brief idea of what needs to be done with each module

Import the database pool if you're using PostgreSQL
const pool = require('../db/db'); // TODO - Uncomment this line when you have the db setup

Assuming you're using bcrypt for password hashing

*/

const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const { email, password } = req.query;
        console.log("Header Prams:" + JSON.stringify(req.query));
        console.log("Body Prams:" + JSON.stringify(req.body));

        // Hash the password
        const salt = 11;
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert the new user into the database
        // const result = await pool.query(
        //     'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
        //     [email, hashedPassword]
        // );
        console.log("Pretend to add the user to the database");

        // Send back the new user's ID and email
        res.status(201).json({
            message: 'User created successfully',
            data: { "email": email, "password": password, "hashedPassword": hashedPassword }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error on /signup' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        console.log("Header Prams:" + JSON.stringify(req.query));
        console.log("Body Prams:" + JSON.stringify(req.body));

        // Check if the user exists
        // const user = await pool.query(
        //     'SELECT * FROM users WHERE email = $1',
        //     [email]
        // );
        // if (user.rows.length === 0) {
        //     return res.status(400).json({ message: 'No Records found' });
        // }
        console.log("Pretend to retrieve the user from the database");
        const retrievedPassword = "foobar";

        // Check if the password is correct
        // https://snyk.io/advisor/npm-package/bcrypt/functions/bcrypt.compare
        // TODO this is buggy. might needd both encrypted or something
        // const validPassword = await bcrypt.compare(password, retrievedPassword); 
        const validPassword = password == retrievedPassword;

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // User is authenticated, perhaps generate a token or start a session here
        // TODO use jwt or sessions to authenticate the user

        // Send back a success message
        res.json({ message: 'Logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    signup,
    login
};