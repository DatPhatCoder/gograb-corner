/* 
Input: VendingMachineID, ProductID, Quantity
Output: Dispense product

add & remove & display (Admin only), update (system only) 

For calling update() for the checkout. https://stackoverflow.com/a/38206334/5728614



*/

const pool = require('../db/dbHandler');

const getInventory = async (req, res) => { 
    try {
        const { email, password } = req.query;
        console.log("Header Prams:" + JSON.stringify(req.query));
        console.log("Body Prams:" + JSON.stringify(req.body));


        console.log("Read from DB...");
        pool.query('SELECT * FROM products', (error, results) => {  // SELECT * FROM products
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// read this. ctrl+f "POST a new user"
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
const addInventory = async (req, res) => { //TODO 
    const { email, password } = req.query
    console.log("[addInventory] Writing to DB...");
    pool.query('INSERT INTO products (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}
const updateInventory = async (req, res) => { //TODO 
    const id = parseInt(request.params.id)
    const { name, email } = req.body // req.query

    console.log("[addInventory] Writing to DB...");
    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        })
}
const removeInventory = async (req, res) => { //TODO 
    const id = parseInt(request.params.id)
    console.log("[addInventory] Writing to DB...");
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}



module.exports = {
    getInventory,
    addInventory,
    updateInventory,
    removeInventory
};