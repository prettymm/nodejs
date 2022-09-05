const fs = require("fs");
const path = require("path");

const   = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, "./index-text.html"), "utf8", function(err, dataStr){
	if(err){
		return console.log("文件读取失败"+err.message);
	}
	//console.log("文件读取成功"+dataStr);

	resolveCSS(dataStr);
	resolveScript(dataStr);
	resolveHTML(dataStr);
})

function resolveCSS(htmlStr){
	const r1 = regStyle.exec(htmlStr);
	const newCSS = r1[0].replace("<style>","").replace("</style>","");
	//console.log(newCSS)
	fs.writeFile(path.join(__dirname, "./style/index.css"), newCSS, function(err){
		if(err){
			return console.log("写入 style 文件失败"+err.message)
		}
		console.log("写入 style 文件成功")
	})
}

function resolveScript(htmlStr){
	const r2 = regScript.exec(htmlStr);
	const newJS = r2[0].replace("<script>","").replace("</script>", "");
	fs.writeFile(path.join(__dirname,"./script/index.js"), newJS, function(err){
		if(err){
			return console.log("写入 script 文件失败"+err.message)
		}
		console.log("写入 script 文件成功")
	})
}

function resolveHTML(htmlStr){
	const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./style/index.css">').replace(regScript,'<script src="./script/index.js"></script>');
	fs.writeFile(path.join(__dirname,"./index.html"), newHTML, function(err){
		if(err){
			return console.log("写入 html 文件失败"+err.message)
		}
		console.log("写入 html 文件成功")
	})
}