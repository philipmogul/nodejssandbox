// Importing modules into nodejs 
var vals = require('./exported.js');


function hey()
{
    console.log('Hello from NodeJs!\n')
}

hey()

vals.exportedlog("Hello Again !!!")
