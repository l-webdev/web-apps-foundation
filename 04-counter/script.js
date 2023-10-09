document.addEventListener("DOMContentLoaded", function () {
  const label = document.querySelector(".counter");
  const main = document.querySelector("main");
  const button = document.querySelector(".reset-button button");

  let counter = 0;
  let colorCounter = 0;

  main.addEventListener("click", increaseCounter);
  button.addEventListener("click", resetCounter);
  document.addEventListener("keydown", handleKeyPress);

  function increaseCounter() {
    counter++;
    label.textContent = counter;

    colorCounter++;
    if (colorCounter > 100) {
      colorCounter = 1;
    }
    updateBackgroundColor();
  }

  function resetCounter() {
    counter = 0;
    colorCounter = 0;
    label.textContent = counter;
    updateBackgroundColor();
    button.blur();
  }

  function handleKeyPress(e) {
    if (["Enter", " "].includes(e.key)) {
      increaseCounter();
    }
  }

  function updateBackgroundColor() {
    const widthPercentage = Math.min(colorCounter, 100);
    main.style.setProperty("--counter", widthPercentage + "%");
  }
});
