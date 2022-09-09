const xingxing = require("./index");
const time = new Date();
const dt = xingxing.dateFormat(time);
console.log(dt);

const htmlStr = '<h1 style="color:red">我是新用户&nbsp;</h1>';

const newHtmlEscasp = xingxing.htmlEscape(htmlStr);

console.log(newHtmlEscasp);

const newHtmlUnEscasp = xingxing.htmlUnEscape(htmlStr);

console.log(newHtmlUnEscasp);