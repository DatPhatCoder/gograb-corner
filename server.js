const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('have');
    res.status(500).json({ message: 'Error' });
    res.send('hi');
})

app.listen(3000);