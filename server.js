const express = require('express');
const db = require('./db');
const routes = require('./routes'); //all routes

const app = express();

// Setup routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Server sent 500 error');
});

// Init database
db.createTableIfNotExists().then(() => {
    // Setup server
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch(err => {
    console.error("Failed to create table: ", err);
});
