// Assignment code here


function generatePassword() {
 
  /* Initial prompt for length of password - parses integer that is provided& determines if valid */
  var length = parseInt(prompt("Enter the desired length of the password:"));

  if (isNaN(length) || length < 8 || length > 120) {
    alert("Invalid length. Please enter a valid number between 8 and 120.");
    return;
  }
/* Rather than use additional prompts, remove chance of errant inputs by using confirms */
  var useUpper = confirm("Include uppercase letters?");
  var useLower = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSymbols = confirm("Include symbols?");

  if (!useUpper && !useLower && !useNumbers && !useSymbols) {
    alert("At least one character type must be selected.");
    return;
  } // logic to ensure viable input is provided
/* Adding if statements for each possible param for password */
  var charset = "";
  
  if (useUpper) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  if (useLower) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  
  if (useNumbers) {
    charset += "0123456789";
  }
  
  if (useSymbols) {
    charset += "!@#$%^&*()_-+=<>?";
  }
  /* Concat selected character sets based on the confirmation results.*/

  /* concated string is added to the retVal variable. */
  var retVal = "";
 
      
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
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
