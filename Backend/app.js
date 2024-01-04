const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Recipes application. Cook quickly. Organize and keep track of all your notes."});
});

// Configuring the database
const dbConfig = require('./database/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Importez vos routes de recettes
const recipeRoutes = require('./routes/Routage'); // Assurez-vous que le chemin est correct
app.use('/api', recipeRoutes); // Utilisez '/api' comme préfixe pour vos routes de recettes

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
