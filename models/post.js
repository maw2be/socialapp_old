var db = require("../db.js")
var Post = db.model ("post", {
	body: {type: String, require:true},
	date: {type: Date, require:true, default: Date.now},
	username: {type: String, require:true}
})
	
	module.exports = Post