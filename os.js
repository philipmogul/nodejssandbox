const os = require('os');

// os functions in nodejs 

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`OS Total Memory = ${totalMem}`);
console.log('OS Free Memory = ' + freeMem);