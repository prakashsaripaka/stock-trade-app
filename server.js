var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const staticAssetsPath = path.resolve(__dirname, 'public');
app.use(express.static(staticAssetsPath));

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    
});

mongoose.connection.on('error', function(error) {
    console.log('Could not connect to the database. Exiting now...'+error);
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})


// Require Notes routes
require('./app/routes/trade.routes.js')(app);

// define a simple route
/*app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});*/

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});