// Importing modules into nodejs 
const vals = require('./exported.js');

function hey() { console.log('Hello from NodeJs!') }
hey()

vals.exportedlog("Hello Again!")
console.log(vals.txt);
