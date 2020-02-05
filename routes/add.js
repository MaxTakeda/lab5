var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	// Capture the inputed data
	var userName = request.query.name;
	var userDesc = request.query.description;

	var newFriend = {
		"name": userName,
		"description": userDesc,
		"imageURL": "http://lorempixel.com/400/400/people" 
	}

	console.log(newFriend);

	data.friends.push(newFriend);

	response.render('index', data);

 }