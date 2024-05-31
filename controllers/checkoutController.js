/* 

Input: _the output of the paymentController_
Output: 4 digit Code

place an order
checks database for stock
order ticket is either created or rejected
    if rejected they are told about the item that is missing
generates a 4 digit code
stores that in the database
communicates the digital code to the associated vending machine
they get there, enter the 4 digit code, checks for the order, dispenses, 
reduces quantities from the database and keeps a record of the transaction

*/

const foo = async (req, res) => {
    try {
        const { email, password } = req.query;
        console.log("Header Prams:" + JSON.stringify(req.query));
        console.log("Body Prams:" + JSON.stringify(req.body));


        console.log("Pretend to foobar");

        // Send back the new user's ID and email
        res.status(201).json({
            message: 'foobar',
            data: { "email": email, "password": password }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    foo
};