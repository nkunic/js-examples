// Import stylesheets
import './style.css';

// Write Javascript code!

var questions = [
  {
    text: 'JS je programski jezik?',
    correctAnswer: true,
  },
  {
    text: 'PHP je isto što i JS?',
    correctAnswer: false,
  },
  {
    text: 'CSS je stajling jezik?',
    correctAnswer: true,
  },
];

var questionIndex = 0;
var userScore = 0;

function askQuestion() {
  var userAnswer = confirm(questions[questionIndex].text + "\nCancel = Ne     OK = Da ");
  if(questions[questionIndex].correctAnswer === userAnswer) {
    userScore++;
  }
  questionIndex++;
  if(questionIndex !== questions.length) {
    askQuestion();
  }
}
askQuestion();
// askQuestion();
// askQuestion();

//console.log("Odgovorili ste tačno na: " + userScore + " od " +  questions.length + " pitanja");
alert("Odgovorili ste tačno na: " + userScore + " od " +  questions.length + " pitanja");
