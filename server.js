//Initialize server

//Require dependencies from node package
var express = require('express');
var bodyParser = require('body-parser');

//Express Configuration

//create an express server
var app = express();

//set our port
var PORT = process.env.PORT || 3030;

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen on port

app.listen(PORT, function () {
    console.log("Now listening on Port: " + PORT);
});