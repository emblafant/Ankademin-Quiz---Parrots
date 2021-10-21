//Buttons
const submitButton = document.querySelector("#submit");
const darkLightModeButton = document.querySelector("#darkLightMode");
const resetButton = document.querySelector("#resetButton");

//Misc Elements
const resultDiv = document.querySelector("#resultDiv");

//Answer buttons
const q1Buttons = document.querySelectorAll("[name='q1']");
const q2Buttons = document.querySelectorAll("[name='q2']");
const q3Buttons = document.querySelectorAll("[name='q3']");
const q4Buttons = document.querySelectorAll("[name='q4']");
const q5Buttons = document.querySelectorAll("[name='q5']");
const q6Buttons = document.querySelectorAll("[name='q6']");
const q7Buttons = document.querySelectorAll("[name='q7']");
const q8Buttons = document.querySelectorAll("[name='q8']");
const q9Buttons = document.querySelectorAll("[name='q9']");
const q10Buttons = document.querySelectorAll("[name='q10']");


//Quiz
submitButton.addEventListener("click", () =>{
  resultDiv.innerHTML ="";

  let questionsAnswered = 0;
  let score = 0;

  const quizCounter = (button) => {
    if (button.checked && button.value === "true") {
      score++;
    }
    if (button.checked) {
      questionsAnswered++;
    }
  };

  //Question 1
  q1Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 2
  q2Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 3
  q3Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 4
  q4Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 5
  q5Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 6
  q6Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 7
  q7Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 8
  q8Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 9
  q9Buttons.forEach((button) => {
    quizCounter(button);
  });

  //Question 10
  let question10total = 0;
  let question10answerd = false;

  q10Buttons.forEach((button) => {
    if (button.checked && button.value === "true") {
      question10total++;
    };
    if (button.checked) {
      question10answerd = true;
    };
  });
  if (question10total === 7) {
    score++;
  };
  if (question10answerd) {
    questionsAnswered++;
  };

  //Print Result
  if (questionsAnswered === 10) { 
    result(score);
    submitButton.remove();
  } else {
    alert("Please answer all questions");
  };
});


//Light and Dark mode
let lightModeOn = true;
darkLightModeButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (lightModeOn) {
    body.style.background = "black";
    body.style.color = "white";
    lightModeOn = false;
    darkLightModeButton.innerText = "Light-Mode";
  } else {
    body.style.background = "white";
    body.style.color = "black";
    lightModeOn = true;
    darkLightModeButton.innerText = "Dark-Mode";
  };
});


//Quiz Result Function
const result = (score) => {
  const resultText = document.createElement("h2");
  resultText.innerText = `Your score is ${score}/10`;
  if (score > 10*0.75) {
    resultText.style.color = "green";
  } else if (score > 10/2) {
    resultText.style.color = "orange";
  }
  resultDiv.appendChild(resultText);
};


//Reset Button
resetButton.addEventListener("click", () => {
  window.location.reload(false);
});