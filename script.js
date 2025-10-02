const calButton = document.getElementById("cal");
const datePicker = document.getElementById("datePicker");
const Age = document.getElementById("currentAge");
calButton.addEventListener("click", () => {
  const currentYear = 2025;
  const selectedDate = new Date(datePicker.value);
  const getYear = selectedDate.getFullYear();
  const currentAge = currentYear - getYear;
  Age.innerText = `${currentAge}`;
});