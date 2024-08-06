let currentQuestion = 0;

function render() {
  showCurrentQuestionLength();
}

function showCurrentQuestionLength() {
  let lengthQuestions = document.getElementById("lengthQuestions");
  lengthQuestions.innerHTML = questions.length;
}

function showQuestion() {
  let question = questions[currentQuestion];
}
