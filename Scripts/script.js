function calculateAkanname(event) {
  event.preventDefault(); 

  
  const dayOfBirth = parseInt(document.getElementById("dayofbirth").value,);
  const monthOfBirth = parseInt(
    document.getElementById("monthofbirth").value,
    
  );
  const yearOfBirth = parseInt(
    document.getElementById("yearofbirth").value,
    
  );
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
const century = Math.floor(year/100 + 1);
const yearOfCentury = year % 100;
const adjustedMonth = month < 3 ? month + 12 : month;
const dayOfWeek = 
(day + Math.floor(2.0 * (adjustedMonth - 2)) - 2 * century + yearOfCentury +
Math.floor(yearOfCentury / 4) + Math.floor(century / 4)) % 
7;
  
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

  
  document.getElementById("output").innerText = `Your Akan name is ${akanName}!`;
}
