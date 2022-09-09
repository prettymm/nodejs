## 安装方式
、、、
npm install xingxing-tools
、、、


## 导入方式
、、、js
const xingxing-tools = require("xingxing-tools")
、、、


## 格式化时间
、、、js
// 调用 dateFormat 对时间进行格式化
const time = new Date();
const dt = xingxing.dateFormat(time);
//结果 2022-09-08 11:14L59
console.log(dt);

、、、

## 转译 HTML 中的特殊字符
、、、js
// 定义了待转换的 HTML字符串
const htmlStr = '<h1 style="color:red">我是新用户&nbsp;</h1>';
// 调用 htmlEscape 方法进行转换
const newHtmlEscasp = xingxing.htmlEscape(htmlStr);
//输出的结果 &lt;h1 style=&quot;color:red&quot;&gt;我是新用户&ampnbsp;&lt;/h1&gt;
console.log(newHtmlEscasp);
、、、

## 还原 HTML 中的特殊字符
、、、js
// 待还原的 HTML 字符串
const newHtmlUnEscasp = xingxing.htmlUnEscape(htmlStr);
// 输出的结果 <h1 style="color:red">我是新用户&nbsp;</h1>
console.log(newHtmlUnEscasp);
、、、

## 开源协议 ISC
