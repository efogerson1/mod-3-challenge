// Assignment code here
const numbers = []
const lower=[]

const validOptions=[]
const firstpicks=["numbers","lower","upper"]
//first pick random and its index 0
//now add a random number to retval
//firstpicks= firstpicks.splice(0,1)

function generatePassword() {
  /* Add prompts -- stored in variables */
  /* Conditionals -- if they say yes to special char, select random spec char and immediatly add to returnval */
  /* Take selected arrays, concat into returnVal and into validOptions
  at this point we have a retval of X length and possibly want more. retval meets min user acceptance
  loops will equal userChoice-retval.length
  */
  var length = 8,
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
