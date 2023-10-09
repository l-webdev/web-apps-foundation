let showPassword = false;
const btn = document.querySelector("button");
const inpt = document.querySelector("input");
btn.addEventListener("click", () => {
  showPassword = !showPassword;
  if (inpt.type === "password") {
    inpt.type = "text";
    btn.innerText = "Hide Password";
  } else {
    inpt.type = "password";
    btn.innerText = "Show Password";
  }
});
