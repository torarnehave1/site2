const express = require('express');
const app = express();
const port = 3000;

// Serve files from the public directory
//app.use(express.static('public'));

// Additional middleware for parsing request bodies, if needed
app.use(express.json()); // For JSON
app.use(express.urlencoded({ extended: true })); // For URL-encoded data

// Handle POST request
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Data received:', data);  // Continue to log the data for server-side visibility
    res.send(`Received your data: ${JSON.stringify(data)}`);  // Include the data in the response
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
