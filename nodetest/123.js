const fs = require("fs");

/*fs.readFile("./1.js", "utf8", function(err, dataStr){
	if(err){
		console.log("读取文件失败"+err);
	}
	console.log("读取文件成功"+ dataStr);
})*/

fs.writeFile("./2.js", "我是增加内容", function(err){
	if(err){
		return console.log("写入文件失败"+err);
	}
	
	console.log("写入文件成功");
})