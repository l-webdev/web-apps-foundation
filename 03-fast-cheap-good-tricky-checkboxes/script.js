const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});

function handleCheckboxChange(event) {
  const clickedCheckbox = event.target;

  // Zähle die abgehakten Checkboxen
  const checkedCheckboxes = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  if (checkedCheckboxes.length > 2) {
    // Finde die zuletzt abgehakte Checkbox und setze sie auf unchecked
    const lastChecked = checkedCheckboxes.find(
      (checkbox) => checkbox !== clickedCheckbox
    );
    lastChecked.checked = false;
  }
}
