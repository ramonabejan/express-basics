'use strict';
var express = require('express');
var app = express();

var posts = require("../mock/posts.json");

app.listen(3000, function(){
	console.log("The frontend server is running on port 3000 ");
}
);

app.get('/', function(req,res){
	res.send("<h1>Hello syncro</h1>");

})

app.get('/blog/:title', function(req, res){
  var title = req.params.title;
  var post = posts[title];
  res.send(post);
});