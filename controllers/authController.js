//demo - authController - brief idea of what needs to be done with each module

// Import the database pool if you're using PostgreSQL
const pool = require('../db/db'); 

// Assuming you're using bcrypt for password hashing
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Insert the new user into the database
        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
            [email, hashedPassword]
        );
        
        // Send back the new user's ID and email
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if the user exists
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        // User is authenticated, perhaps generate a token or start a session here
        
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
