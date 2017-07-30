// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. 
// This will be used to display a JSON of all 
// possible friends.
// A POST routes /api/friends. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// Displays all of the available friends in json format

var friends = require("../data/friends.js");
var path = require ("path");

var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
 var bestMatch = {
 	name:"",
 	photo:"",
 	matchDifference: 1000
 };
 var userData = req.body;
 var userName = userData.name;
 var userImage = userData.image;
 var userScores = userData.scores;

 var totalDifference = 0;

 for(var i = 0; i < friends.length; i++) {
 	console.log(friends[i].name);
 	totalDifference = 0;

 	for(var j = 0; j < friends[i].scores[j]; j++) {
 		totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
 		if (totalDifference <= bestMatch.friendDifference) {
 			bestMatch.name = friends[i].name;
 			bestMatch.photo = friends[i].photo;
 			bestMatch.matchDifference = totalDifference;
 		}
 	}
 }

 console.log(userData);
 console.log(totalDifference);
 console.log(bestMatch.name)


 friends.push(userData);

 res.json(bestMatch);
});
}

// -----------------------------------------------------//
// Displays all of the available friends in json format

// app.get("/api/:friends?", function(req, res) {
//   var friend = req.params.friends;

//   if (friend) {
//     console.log(friend);

//     for (var i = 0; i < friends.length; i++) {
//       if (friend === friends[i].name) {
//         return res.json(friends[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(friends);
// });
