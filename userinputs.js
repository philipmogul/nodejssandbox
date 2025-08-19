const readline = require('readline');

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  // Close the interface
  rl.close();
});
