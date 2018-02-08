var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var name = req.query.name;
	var desc = req.query.description;
	var newFr = {
		"name" : name,
		"description" : desc,
		"imageURL" : "https://lorempixel.com/400/400.people"
	}
	data.friends.push(newFr);
}