function calculateAkanname(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("dayofbirth").value);
  const month = parseInt(document.getElementById("monthofbirth").value);
  const gender = document.getElementById("gender").value;
  const output = document.getElementById("output");

  if (day <= 0 || day > 31 || month <= 0 || month > 12) {
    output.textContent = "Invalid date. Please enter a valid day and month.";
    return;
  }

  const today = new Date();
  const year = today.getFullYear();
  const century = Math.floor(year / 100);
  const yearDigits = year % 100;
  const dayOfWeek = Math.round(
    (century / 4 -
      2 * century -
      1 +
      (5 * yearDigits) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
      7
  );

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  const index = (dayOfWeek + 7) % 7; // Ensure positive index
  const akanName = gender === "Male" ? maleNames[index] : femaleNames[index];

  output.textContent = `You were born on a ${days[index]}. Your Akan name is ${akanName}.`;
}
