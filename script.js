// Assignment Code
var generateBtn = document.querySelector("#generate");

// First function to collect user input 
function writePassword() {
  var password = generatePassword();
  var passwordInput = document.querySelector("#password");
  passwordInput.value = password;

}

generateBtn.addEventListener("click", writePassword);

// Main function for generating random password
function generatePassword() {
  var result = "";

  var passwordNumChar = prompt("Choose your password length (8-128 characters)");

  if (passwordNumChar < 8 || passwordNumChar > 128) {
    alert("Password length must be between 8 and 128 characters.");
  } else {

    for (var i = 0; i < passwordNumChar; i++) {
      result = result + "a";
    }
  }

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = lowerCaseChars.toUpperCase();
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var validChars = "";

  var isLowerCase = confirm("Would you like lowercase characters?");

  if (isLowerCase) {
    validChars = validChars + lowerCaseChars;

  }
  var isUpperCase = confirm("Would you like uppercase characters?");

  if (isUpperCase) {
    validChars = validChars + upperCaseChars;

  }
  var isSpecialChar = confirm("Would you like to use special characters?");

  if (isSpecialChar) {
    validChars = validChars + specialChars;

  }

  if (validChars === "") {
    alert("Please choose valid characters");
  }
  
  var tempResult = "";


  for (i = 0; i < result.length; i++) {
    var randomNumber = Math.floor(Math.random() * validChars.length);
    var randomChar = validChars[randomNumber];
    tempResult = tempResult + randomChar;
  }

  result = tempResult;

  return result;
}