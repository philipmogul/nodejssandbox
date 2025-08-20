// load events module 

// Capital Letter to denote the event is a class 
const EventEmitter = require('events');

// create instance of the class inorder to use it 
const emitter = new EventEmitter();

// register a listener for a random event function 
emitter.on('examplemethod', function()
{
    console.log('Listener called!');
});

// Raise an event 
emitter.emit('examplemethod');
