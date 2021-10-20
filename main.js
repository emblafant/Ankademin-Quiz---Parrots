//Buttons
const submitButton = document.querySelector("#submit");
const darkLightModeButton = document.querySelector("#darkLightMode");

//Misc Elements
const resultDiv = document.querySelector("#resultDiv");

//Answer buttons
const q1Buttons = document.querySelectorAll("[name='q1']");
const q10Buttons = document.querySelectorAll("[name='q10']");


//Quiz
submitButton.addEventListener("click", () =>{
  submitButton.remove();
  resultDiv.innerHTML ="";
  let questionsAnswered = 0;
  let score = 0;


  //Question 1
  q1Buttons.forEach((button) => {
    if (button.checked && button.value === "true") {
      score++;
    }
    if (button.checked) {
      questionsAnswered = +1;
    }
  });

  //Question 10
  let question10total = 0;
  let question10answerd = false;
  q10Buttons.forEach((button) => {
    if (button.checked && button.value === "true") {
      question10total++;
      question10answerd = true;
    };
  });
  if (question10total === 7) {
    score++;
  }
  if (question10answerd) {
    questionsAnswered++;
  };

  //Print Result
  result(score);
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


//Quiz resetbutton
const result = (score) => {
  const resultText = document.createElement("h2");
  resultText.innerText = `Your score is ${score}/10`;
  resultDiv.appendChild(resultText);
};