const rf = require('fs');

//const files = rf.readdirSync('./'); // synchronously reads files in curr directory 

// synchronous loads a file and outputs either an error or correct output 
rf.readdir('./', function(err, files)
{
    if( err ) console.log('Error ', err); 
    else console.log('Result ', files);
});

