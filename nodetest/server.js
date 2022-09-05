const http = require("http");

const server = http.createServer();

server.on("request", function(req, res){
	const url = req.url;
	const method = res.method;

	let content = "<h1>404 Not found!</h1>";

	if(url == "/" || url == "/index.html"){
		content = "<h1>首页</h1>";
	} else if(url == "/about.html" ){
		content = "<h1>关于我们</h1>";
	}


	res.setHeader("Content-Type", "text/html; charset=utf-8")
	res.end(content);

})

server.listen(80, function(){
	console.log("server running at http://127.0.0.1:80");
})