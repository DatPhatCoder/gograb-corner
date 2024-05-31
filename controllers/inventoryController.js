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

        // Send back the new user's ID and email

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const addInventory = async (req, res) => {
    const { email, password } = req.query
}
const removeInventory = async (req, res) => {
    const { email, password } = req.query
}



module.exports = {
    getInventory,
    addInventory,
    removeInventory
};