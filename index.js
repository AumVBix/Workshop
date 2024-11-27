const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Docker!');
});

app.get('/aum', (req, res) => {
    res.send('Hello from Heaven!');
});

app.listen(3000, () => {
    console.log('API running on port 3000');
});