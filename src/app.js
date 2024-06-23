// Selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPin = document.querySelector(".generatedPin");
const showKeypadValue = document.querySelector(".showValue");
const removeBtn = document.getElementById("removeBtn");
const submitBtn = document.querySelector(".submit-btn");
const wrongPinNotification = document.querySelector(".wrong-pin");
const correctPinNotification = document.querySelector(".correct-pin");
const tryLeft = document.getElementById("tryLeft");
const actions = document.querySelector(".action-left");

function generatePin() {
  let randomNum = Math.floor(Math.random() * 9000 + 1000);
  generatedPin.value = randomNum;
  generatePinBtn.disabled = true;
  generatePinBtn.style.backgroundColor = "grey";
}

function showKeypadInput(number) {
  let chances = tryLeft.innerHTML;
  // console.log(chances);
  if (chances >= 0) {
    if (generatePin.value === "") {
      alert("Please generate a pin first!");
    } else {
      showKeypadValue.value += number;
    }

    if (number === "C") {
      showKeypadValue.value = "";
    }
  }
}

function removeSingleDigit() {
  if (generatedPin.value === "") {
    alert("Please generate a pin first ");
  } else {
    let currentValue = showKeypadValue.value;
    showKeypadValue.value = currentValue.slice(0, -1);
    console.log(currentValue);
  }
}

function checkGeneratedPin() {
  let newPin = generatedPin.value;
  let currentPin = showKeypadValue.value;

  if (newPin == currentPin) {
    showCorrectNotification();
  } else {
    showWrongNotification();
    numberOfTry();
  }
}

function numberOfTry() {
  let chance = tryLeft.innerText;
  if (chance > 0) {
    tryLeft.innerHTML = --chance;
  } else {
    tryLeft.innerHTML = "No try left! Try after 30 minutes";
    submitBtn.disabled = "true";
  }
}

function showWrongNotification() {
  wrongPinNotification.style.display = "block";
  correctPinNotification.style.display = "none";
  generatePinBtn.style.backgroundColor = "#c1121f";
  submitBtn.style.backgroundColor = "#c1121f";
  showKeypadValue.value = "";
}

function showCorrectNotification() {
  correctPinNotification.style.display = "block";
  wrongPinNotification.style.display = "none";
  generatePinBtn.style.backgroundColor = "#588157";
  submitBtn.style.backgroundColor = "#588157";
  submitBtn.disabled = "true";
}

function hideNotification() {
  wrongPinNotification.style.display = "none";
  correctPinNotification.style.display = "none";
}

hideNotification();
generatePinBtn.addEventListener("click", generatePin);
removeBtn.addEventListener("click", removeSingleDigit);
submitBtn.addEventListener("click", checkGeneratedPin);
