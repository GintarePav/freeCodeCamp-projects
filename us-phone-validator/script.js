const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", () => check());
const results = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => clear ());

const correctNumberFormats = [
  /^1\s\d{3}-\d{3}-\d{4}$/, 
  /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
  /^1\(\d{3}\)\d{3}-\d{4}$/,
  /^1\s\d{3}\s\d{3}\s\d{4}$/,
  /^\d{10}$/,
  /^\d{3}-\d{3}-\d{4}$/,
  /^\(\d{3}\)\d{3}-\d{4}$/
];

const check = () => {
  if (userInput.value === '') {
    alert("Please provide a phone number");
    return
  }

  let match = false;

  for (let i = 0; i < correctNumberFormats.length; i++) {
    if (correctNumberFormats[i].test(userInput.value)) {
    match = true;
    break;
  } 
}

if (match) {
   results.innerHTML = `Valid US number: ${userInput.value}`;
} else {
  results.innerHTML = `Invalid US number: ${userInput.value}`;
  }
}

const clear = () => results.innerHTML = "";