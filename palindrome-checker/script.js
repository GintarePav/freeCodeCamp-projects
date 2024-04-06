const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", checkWord)
const result = document.getElementById("result");

function checkWord() {
  const wordPassed = textInput.value;
  const wordToCheck = wordPassed.replace(/[^a-z0-9]/gi, '').toLowerCase();
  if (wordToCheck == "") {
    alert("Please input a value")
  } else {
    const wordReversed = wordToCheck.split("").reverse().join("");
    if (wordToCheck === wordReversed) {
      result.innerHTML = `<p>${wordPassed} is a palindrome</p>`;
    } else {
      result.innerHTML = `<p><span id="bold">${wordPassed}</span> is not a palindrome</p>`
    }
  }
}

textInput.addEventListener("click", cleanResult);

function cleanResult() {
  result.innerHTML = "";
}