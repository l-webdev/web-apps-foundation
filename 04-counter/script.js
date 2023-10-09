const label = document.querySelector(".counter");
const main = document.querySelector(".gradient");
const button = document.querySelector(".reset-button");

let counter = 0;
let colorCounter = 0;

main.addEventListener("click", increaseCounter);
button.addEventListener("click", resetCounter);
document.addEventListener("keydown", handleKeyPress);

function increaseCounter() {
  counter++;
  label.innerText = counter;

  colorCounter++;
  if (counter === 101) {
    colorCounter = 1;
  }
  main.style.background = `linear-gradient(90deg, gold ${colorCounter}%, white 0%)`;
}

function resetCounter() {
  counter = 0;
  main.style.background = `linear-gradient(90deg, gold 0%, white 0%)`;
  label.textContent = counter;
}

function handleKeyPress(e) {
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
}
