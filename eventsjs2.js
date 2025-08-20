// Event handlers 

// load events module 

// Capital Letter to denote the event is a class 
const EventEmitter = require('events');

// create instance of the class inorder to use it 
const emitter = new EventEmitter();

// register a listener for a random event function 
// arrows eliminate need to use generic keyword function()
emitter.on('examplemethod', (eventArg) => 
{
    console.log('Listener called!', eventArg);
});

// Raise an event , And Event Arguments 
emitter.emit('examplemethod', {id: 1, url: 'https://'});
