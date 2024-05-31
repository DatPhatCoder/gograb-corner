/*
Input: MachineID, productID, quantity, payment stuff.
Output: return 4 digit code to user. Save 4 digit code to db.

*/
const postPayment = async (req, res) => {
    try {
        const { email, password } = req.query;
        console.log("Header Prams:" + JSON.stringify(req.query));
        console.log("Body Prams:" + JSON.stringify(req.body));
        // TODO confirm productID with quantity is in stock. If not, return error.
        // TODO add transction to db under the MachineID. Include the code.


        console.log("Pretend to foobar");
        // get random 4 didgit code
        const code = Math.floor(1000 + Math.random() * 9000);


        // Send back the new user's ID and email
        res.status(201).json({
            data: { "code": code}
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {postPayment};