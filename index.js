// Import stylesheets
import './style.css';

// Write Javascript code!



var questions = [
  {
    text: "JS je programski jezik?",
    correctAnswer: true
  },
  {
    text: "PHP je isto što i JS?",
    correctAnswer: false
  },
  {
    text: "CSS je stajling jezik?",
    correctAnswer: true
  }
]

function askQuestion() {
  var userAnswer = confirm(questions[]);
}