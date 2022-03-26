// Assignment code here
var generatePassword = function() {

  // ask length
  var passLength = window.prompt("What is your desired character length? Please choose a number between 8 and 128.");
    if (!passLength) {
      window.alert("Please enter a valid number.");
      return generatePassword();
    } else if (passLength < 8 || passLength > 128) {
      alert("Please choose a number between 8 and 128.");
      return generatePassword();
    }
  
  // lowercase
  var lowercase = window.confirm("Would you like lowercase letters?")

  // uppercase
  var uppercase = window.confirm("Would you like uppercase letters?")

  // numerics
  var num = window.confirm("Would you like numbers?")

  // special characters
  var specialChar = window.confirm("Would you like special characters?")

    //must choose one criteria
    if (!lowercase && !uppercase && !num && !specialChar) {
      alert("You must choose at least one criteria.");
      return generatePassword();
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
