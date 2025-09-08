// -----------------------------
// Part 1: JavaScript Basics
// -----------------------------

// Variables and conditionals
let isLoggedIn = false;

// Function to greet user based on input
document.getElementById("greet-btn").addEventListener("click", function () {
  const name = document.getElementById("username").value;

  if (name) {
    document.getElementById("welcome-message").textContent = `Hello, ${name}! 🎉`;
    isLoggedIn = true;
  } else {
    document.getElementById("welcome-message").textContent = "Please enter your name.";
  }
});

// -----------------------------
// Part 2: Functions
// -----------------------------

// Function to add two numbers
function calculateTotal(a, b) {
  return a + b;
}

// Function to format result string
function formatResult(result) {
  return `The total is: ${result}`;
}

document.getElementById("calc-btn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;

  const total = calculateTotal(num1, num2);
  document.getElementById("calc-result").textContent = formatResult(total);
});

// -----------------------------
// Part 3: Loops
// -----------------------------

const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍓 Strawberry"];

document.getElementById("list-btn").addEventListener("click", function () {
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = ""; // clear list before appending

  // Using a for loop
  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }

  // Using forEach loop (second example)
  fruits.forEach(fruit => console.log("I love:", fruit));
});

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------

document.getElementById("toggle-btn").addEventListener("click", function () {
  const textElement = document.getElementById("toggle-text");
  textElement.classList.toggle("highlight");
});
