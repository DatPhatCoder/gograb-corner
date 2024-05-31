/*
Input: 4 digit Code
Output: Dispense product

This will only be called from the vending machine. Will get a code as a checksum?
- Maybe do some location matching between the vending machine and the user's location
*/

const foo = async (req, res) => {
    try {
        const { code } = req.query;
        console.log("Header Prams:" + JSON.stringify(req.query));
        console.log("Body Prams:" + JSON.stringify(req.body));


        console.log("Pretend to foobar");

        // Send back the new user's ID and email
        res.status(201).json({
            message: 'foobar',
            data: { "code": code}
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    foo
};