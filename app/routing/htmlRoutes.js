//dependencies
var path = require('path');

//routing

module.exports = function (app) {
    //HTTP GET Requests
    //user is redirected to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //default route is home page
    app.get("*", function (req, res) {
        res.sendFile(Path.join(__dirname, "/../public/home.html"));
    })
}