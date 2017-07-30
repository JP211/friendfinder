
// Setting up the dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serving static files in my public and routing folders

// app.use(express.static("public")); //not working
// app.use(express.static("routing"));//not working
// app.use(express.static("images")); //not working

// app.use(express.static(path.join(__dirname, 'public')))

app.get("/", function (req,res) {
	res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "/public/survey.html"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});