// Assignment code here
// const numbers = ["1", "2", "3"];
// const randomNumbers = Math.floor(Math.random() * numbers.length);


// const upper = ["A", "B", "C"]
// const randomUpper = Math.floor(Math.random() * upper.length);

// const lower=["a","b","c"];
// const randomLower = Math.floor(Math.random() * lower.length);

// const validOptions=[randomNumbers, randomLower, randomUpper ]
// const firstpicks=["numbers","lower","upper"]




function generatePassword() {
 
  var length = parseInt(prompt("Enter the desired length of the password:"));

  if (isNaN(length) || length < 8 || length > 120) {
    alert("Invalid length. Please enter a valid number between 8 and 120.");
    return;
  }

  var useUppercase = confirm("Include uppercase letters?");
  var useLowercase = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSymbols = confirm("Include symbols?");

  if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
    alert("At least one character type must be selected.");
    return;
  }


 
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
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
