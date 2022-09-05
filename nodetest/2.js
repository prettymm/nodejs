const path = require("path");
const fs = require("fs");

const pathStr = path.join("/a", "/b/c", "../..", "/d", "e");
console.log(pathStr);

fs.readFile(path.join(__dirname, '/1.js'), 'utf8', function(err, dataStr){
	if(err){
		console.log(err)
	}
	console.log(dataStr)
})