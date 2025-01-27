function calculateAkanname(event) {
  event.preventDefault();

  const dayOfBirth = parseInt(document.getElementById("dayofbirth").value);
  const monthOfBirth = parseInt(document.getElementById("monthofbirth").value);
  const yearOfBirth = parseInt(document.getElementById("yearofbirth").value);
  const gender = document.getElementById("gender").value;

  if (
    isNaN(dayOfBirth) ||
    isNaN(monthOfBirth) ||
    isNaN(yearOfBirth) ||
    gender === "disabled selected"
  ) {
    document.getElementById("output").innerText =
      "Please provide valid inputs.";
    return;
  }


  const birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
  const dayOfWeek = birthDate.getDay();
  const maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  let akanName = "";

  if (gender === "Male") {
    akanName = maleAkanNames[dayOfWeek];
  } else if (gender === "Female") {
    akanName = femaleAkanNames[dayOfWeek];
  }

  document.getElementById(
    "output"
  ).innerText = `Your Akan name is ${akanName}!`;
}
