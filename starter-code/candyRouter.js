var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},
				{"id":2,"name":"Pez","color":"Green"},
				{"id":3,"name":"Marshmallow","color":"Pink"},
				{"id":4,"name":"Candy Stick","color":"Blue"}]

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
    res.send(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

// Fill out the rest of the routes here

router.get('/:id', function(req, res) {
	// SHOW
	res.send(candies[req.params.id-1]);
});

router.post('/', function(req, res) {
	console.log(req.body);
	candies.push(req.body);
	res.send(req.body);

});

router.put('/:id', function(req, res) {
	console.log(req.params.id);
	candies[req.params.id-1] = req.body;
	res.send(candies[req.params.id-1]);
});

router.delete('/:id', function(req, res) {
	console.log(req.params.id);
	candies[req.params.id-1] = null;
	res.send(candies[req.params.id-1]);
});



module.exports = router;