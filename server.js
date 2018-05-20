var express = require('express');
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var path = require("path");
//controller import
var htmlRouter = require('./controllers/burgers_controller.js');

// For express 
var app = express();
var PORT = process.env.PORT || 8080;

// For bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Use api routs
app.use('/', htmlRouter);

// express listening port
app.listen(PORT, function(){
  console.log("listening on port: " + PORT);
});