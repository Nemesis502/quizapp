let currentQuestion = 0;

function render() {
  showCurrentQuestionLength();
  showQuestion();
}

function showCurrentQuestionLength() {
  let lengthQuestions = document.getElementById("lengthQuestions");
  lengthQuestions.innerHTML = questions.length;
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selcction) {
  let question = questions[currentQuestion]; // weiß damit welche Frage ansteht
  // console.log(selcction);
  let selectedQuestionNumber = selcction.slice(-1); // entfernt den letzten Buschstaben aus z.b. "answer_2, in dem Fall die 2". Je nachdem welche Antwort angeklickt wird.
  // console.log(selectedQuestionNumber);
  // console.log(question["right_answer"]);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  document.getElementById("next-button").disabled = false;

  if (selectedQuestionNumber == question["right_answer"]) {
    //prüft ob der entfernte Buchstabe mit der richten Antwort übereinstimmt
    // console.log("Richtige Antwort!");
    document.getElementById(selcction).parentNode.classList.add("bg-success");
  } else {
    // console.log("Falsche Antwort");
    document.getElementById(selcction).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
}
