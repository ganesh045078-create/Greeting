// DOM Elements
const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');

// Change greeting when button clicked
greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = 'Hello';
  }
});

// Color box elements
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const color = box.textContent.toLowerCase();
    box.style.backgroundColor = color;
    box.style.color = color === "yellow" ? "#333" : "#fff";
  });
});
