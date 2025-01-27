function calculateAkanname(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get input values
  const dayOfBirth = parseInt(document.getElementById("dayofbirth").value, 10);
  const monthOfBirth = parseInt(
    document.getElementById("monthofbirth").value,
    10
  );
  const yearOfBirth = parseInt(
    document.getElementById("yearofbirth").value,
    10
  );
  const gender = document.getElementById("gender").value;

  // Validate inputs
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

  // Calculate the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);
  const dayOfWeek = birthDate.getDay();

  // Akan names
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

  // Display the result
  document.getElementById("output").innerText = `Your Akan name is ${akanName}!`;
}
