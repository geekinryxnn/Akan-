function calculateAkanname() {
    functionpreventdefault();
    console.log("====event")
  const day = parseInt(document.getElementById("dayofbirth").value);
  const month = parseInt(document.getElementById("monthofbirth").value);
  const gender = document.getElementById("gender").value;
  const output = document.getElementById("output");
  

  // Validate input
  if (
    !day ||
    day < 1 ||
    day > 31 ||
    !month ||
    month < 1 ||
    month > 12 ||
    !gender
  ) {
    output.textContent = "Please provide valid inputs for all fields.";
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
