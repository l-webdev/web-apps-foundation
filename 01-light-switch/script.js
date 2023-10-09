let darkMode = false;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  darkMode = darkMode ? false : true;
  document.body.classList.toggle("body-switch", darkMode);
  btn.classList.toggle("btn-switch", darkMode);
  document.title = darkMode ? "Good Night" : "Good Morning";
});
