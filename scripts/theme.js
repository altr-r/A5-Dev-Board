const themePicker = document.getElementById("themePicker");
const colorPicker = document.getElementById("colorPicker");

themePicker.addEventListener("click", () => {
  colorPicker.click();
});

colorPicker.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});
