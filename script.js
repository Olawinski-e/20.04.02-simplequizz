var myQuestions = [
  {
    question: "What's the name of my dog?",
    answers: {
      a: "Coucou",
      b: "Modjo",
      c: "Chien"
    },
    correctAnswer: "b"
  },
  {
    question: "How I see myself in a few years?",
    answers: {
      a: "Lead Web developer, helping for junior web dev",
      b: "Funny woman doing a big show in Vegas",
      c: "Chien"
    },
    correctAnswer: "a"
  }
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; (i = questions.length); i++) {
      //reset list of answers
      answers = [];
      // for each available answer
      for (letter in questions[i].answers) {
        //add html radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      //add question & answers to the output
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    //finally combine output list to one string
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    //keep track of answers
    var userAnswer = "";
    var numCorrect = 0;

    //for each question
    for (var i = 0; i < questions.length; i++) {
      //find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      //if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add number to correct answers
        numCorrect++;

        //color answer green
        answerContainers[i].style.color = "lightgreen";
      }

      //if answer is not correct or blank
      else {
        // color answer red
        answerContainers[i].style.color = "red";
      }
    }
  }

  // show the questions
  showQuestions(questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  };
}
