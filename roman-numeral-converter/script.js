const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => convert());

const romanLetters = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const  convert = () => {
  if (!numberInput.value) {
    output.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (numberInput.value < 1) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`
  } else if (numberInput.value > 3999) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`
  } else {
    let romanOutput = "";
    for (let i in romanLetters) {
      while (numberInput.value >= romanLetters[i]) {
        romanOutput += i;
        numberInput.value -= romanLetters[i];
      }
    }
    output.innerHTML = `<p>${romanOutput}</p>`
  }
}