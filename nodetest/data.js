const TIME = require("./dataFormat");

const dt = new Date();

const newDT = TIME.dateFormat(dt);
console.log(newDT)