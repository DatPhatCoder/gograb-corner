const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const vendingMachineRoutes = require('./routes/vendingMachineRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const locationRoutes = require('./routes/locationRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')

app.use(express.json());

// Use the modular routes for different functionalities
app.use(authRoutes);
app.use(userRoutes);
app.use(vendingMachineRoutes);
app.use(inventoryRoutes);
app.use(locationRoutes);
app.use(paymentRoutes);
app.use(checkoutRoutes);

// Route for Home
app.get('/', (req, res) => {
    res.send('Welcome to GoGrab Corner!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
