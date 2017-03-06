var express = require("express")
var bodyParser = require("body-parser")
var post = require("./models/post.js")
var app = express()

app.use(bodyParser.json())

app.get("/api/post", function (req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	post.find(function(err,post){
		if(err){return next(err)}
		res.json(post)
	})
})


app.post("/api/post", function(req,res, next){
	var post = new Post({
		username: req.body.username,
		body: req.body.body
		})
		post.save(function(err, post){
			if (err){return next(err)}
			res.json(201,post)
		})
})

app.listen(3000,function(){
	console.log("Server listening on", 3000)
})