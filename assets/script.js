var characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '1234567890',
  special: '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~',
};
// Assignment code here

var generatePassword = function() {
  
  // ask length
  var passLength = parseInt(window.prompt("What is your desired character length? Please choose a number between 8 and 128."));
  console.log(passLength)
  if (!passLength) {
    window.alert("Please enter a valid number.");
    return generatePassword();
  } else if (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8 and 128.");
    return generatePassword();
  }
  
  // lowercase
  var lowerPrompt = window.confirm("Would you like lowercase letters?")
  
  // uppercase
  var upperPrompt = window.confirm("Would you like uppercase letters?")
  
  // numerics
  var numPrompt = window.confirm("Would you like numbers?")
  
  // special characters
  var specialCharPrompt = window.confirm("Would you like special characters?")
  
  //must choose one criteria
  if (!lowerPrompt && !upperPrompt && !numPrompt && !specialCharPrompt) {
    alert("You must choose at least one criteria.");
    return generatePassword();
  }

  var passChars = ""

  if (lowerPrompt) {
    passChars = passChars.concat(characters.lowercase)
    console.log(passChars)
  }

  if (upperPrompt) {
    passChars = passChars.concat(characters.uppercase)
    console.log(passChars)
  }

  if (specialCharPrompt) {
    passChars = passChars.concat(characters.special)
    console.log(passChars)
  }

  if (numPrompt) {
    passChars = passChars.concat(characters.number)
    console.log(passChars)
  }
  var passArray = passChars.split("")
  console.log(passArray)
  var makePass = ""
  
  for (var i = 0; i < passLength; i++) {
    makePass = makePass + passArray[Math.floor(Math.random() * passArray.length)];
    console.log(makePass);
    // var index = Math.floor(Math.random() * passChars.length)
    // console.log(index)
  }
  return makePass;
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
