var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var users = [];
var waitList = [];
//User information will come from
    //Name
    //Phone number 
    //Email
    //unique id

   // Basic route that sends the user first to the AJAX Page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "index.html"));
    });
    
    app.get("/tables", function(req, res) {
      res.sendFile(path.join(__dirname, "tables.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
      });
    
    // Get all characters
    // app.get("/all", function(req, res) {
    //   res.json(characters);
    // });
    app.post("/api/new", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newReservation = req.body;
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newReservation);
      
        users.push(newReservation);
      
        res.json(newReservation);
      });
  