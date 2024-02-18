const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

////////////////////// Server Setup ////////////////////////

// Database connection pool
const pool = new Pool({
    user: 'your_db_user',
    host: 'your_db_host',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 'your_db_port',
  });
  
  app.use(express.json());
  
  // Route handler for getting inventory
  app.get('/api/inventory', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM inventory');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Route handler for adding an item to the inventory
  app.post('/api/inventory', async (req, res) => {
    try {
      const { itemName, quantity } = req.body;
      const result = await pool.query('INSERT INTO inventory (item_name, quantity) VALUES ($1, $2) RETURNING *', [itemName, quantity]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Route handler for updating inventory
  app.put('/api/inventory/:itemId', async (req, res) => {
    try {
      const { itemId } = req.params;
      const { quantity } = req.body;
      const result = await pool.query('UPDATE inventory SET quantity = $1 WHERE id = $2 RETURNING *', [quantity, itemId]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Route handler for deleting an item from the inventory
  app.delete('/api/inventory/:itemId', async (req, res) => {
    try {
      const { itemId } = req.params;
      await pool.query('DELETE FROM inventory WHERE id = $1', [itemId]);
      res.send('Item deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

////////////////////// App Backend Routes Prototype /////////////////////////

// Route for Home
app.get('/', (req, res) => {
    res.send('Welcome to GoGrab Corner!');
});

// User authentication routes
app.post('/api/users/signup', (req, res) => {
    // Handle user signup
});

app.post('/api/users/login', (req, res) => {
    // Handle user login
});

// Vending machine interaction routes
app.get('/api/machines/nearest', (req, res) => {
    // Handle fetching nearest vending machine
});

app.get('/api/machines/:machineId/products', (req, res) => {
    // Handle fetching products for a specific machine
});

app.post('/api/orders', (req, res) => {
    // Handle creating a new order
});

// User account management routes
app.get('/api/users/:userId/settings', (req, res) => {
    // Handle fetching user settings
});

app.put('/api/users/:userId', (req, res) => {
    // Handle updating user account information
});

// User order history route
app.get('/api/users/:userId/orders', (req, res) => {
    // Handle fetching order history for a user
});

// Additional informational routes
app.get('/api/terms', (req, res) => {
    // Serve the Terms & Conditions content
});

app.get('/api/privacy', (req, res) => {
    // Serve the Privacy Policy content
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
