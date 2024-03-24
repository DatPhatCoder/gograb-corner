/*
Input:
Output:

For getting location data for the front end. Not sure if needed

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