const express = require('express');
const bodyParser = require('body-parser');  // Helps in parsing the body of POST requests
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST request
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);
    res.send(`Received your data!`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
