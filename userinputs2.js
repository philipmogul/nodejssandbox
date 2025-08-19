const readline = require('readline');

console.log('Asking Multiple Questions With NodeJs!');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['What is your name? ', 'How old are you? ', 'What is your favorite color? '];
let answers = [];
let index = 0;

const askQuestion = () => {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      index++;
      askQuestion();
    });
  } else {
    console.log('\nSummary of your input:');
    console.log(`Name: ${answers[0]}`);
    console.log(`Age: ${answers[1]}`);
    console.log(`Favorite Color: ${answers[2]}`);
    rl.close();
  }
};

askQuestion();
