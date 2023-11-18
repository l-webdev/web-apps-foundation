let redSlider = document.getElementById("red-slider");
let greenSlider = document.getElementById("green-slider");
let blueSlider = document.getElementById("blue-slider");
let hexValue = document.getElementById("hex-value");

function rgbToHex(r, g, b) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function updateColor() {
  let red = parseInt(redSlider.value);
  let green = parseInt(greenSlider.value);
  let blue = parseInt(blueSlider.value);

  let hex = rgbToHex(red, green, blue);

  document.body.style.backgroundColor = hex;
  hexValue.textContent = hex;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

updateColor();
