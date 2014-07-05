// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    //  mongoose = require('mongoose'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    partials = require('express-partials');

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(partials());

app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + "/public"));

require('./app/routes.js')(app);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
