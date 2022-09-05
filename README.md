const fs = require("fs");

fs.readFile(文件路径，编码格式，

callback(err, dataStr))

fs.writeFile(文件路径，callback(err))

split(" "); //字符串分割

replace(a,b) //字符串替换 用b替换a

join("\r\n") //换行


fs-处理路径问题：

__dirname //当前文件所处的目录

==========================

const path = require("path");

path 路径模块

path.join([...paths]) //路径拼接

path.basename() //获取文件的名称部分

path.extname(); //获取文件名的后缀名

fs.writeFile 

//只能创建文件，不能创建路径

//重复执行会覆盖之前的文件，而不会报错

=============================

php study: Apache and MySQL

const http = require("http");

http 模块

http.createServer()

=====

tool: 

postman

vs code

nodepad++

mindjet mind manager

===========

nodejs 中的模块

加载模块：

1.加载内置模块 const fs = require("fs");

2.加载用于的自定义模块 const custom = require("./custom.js") || const custom = require("./custom")

3.加载第三方模块 const moment = require("moment")

module.exports = {} //向外共享成员

const age = 20;

module.exports.username = 'zs';

module.exports.age = age;

module.exports.sayhello =  function(){

	console.log("Hello");
	
}

require //导入模块

require('./selfname')


//使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。

//exports 和 module.exports 指向同一个对象
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports) //true

//为了防止混乱，不建议在一个模块里同时使用 exports 和 module.exports 

===============================

格式化时间的包 moment
http://momentjs.cn/
https://momentjs.com/

=====================

npm 安装指定版本的包
@符号指定具体版本 //npm i moment@2.22.2

2.22.2
第1位数字 大版本
第2位数字 功能版本
第3位数字 bug修复版本
