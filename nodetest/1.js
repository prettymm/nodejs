const fs = require("fs");

fs.readFile(__dirname + "/成绩.txt", 'utf-8', function(err, dataStr){
	if(err){
		return console.log("读取失败" + err.message);
	}
	//console.log("读取成功" + dataStr);

	const arrOld = dataStr.split(" ");
	
	const arrNew = [];
	arrOld.forEach(item => {
		arrNew.push(item.replace("=", ":"));
	})

	const newStr = arrNew.join("\r\n");
	console.log(newStr);

	fs.writeFile(__dirname+ "/成绩-ok.txt", newStr, function(err){
		if(err){
			return console.log("写入失败"+err);
		}
		console.log("写入成功");
	})
})