// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersOnly = /^\d+$/;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Validate entered number of password characters
function errCheck(myfield) {
  var myData = myfield;
  var isValid;
  if(myData!==''){
   if((numbersOnly.test(myData)) && ((myData < 129) && (myData > 7))) {
    isValid = true;
    console.log("in function; ", myData);
    alert('It is GOOD!');
   }else{
    isValid = false;
    alert('Your data input is invalid!');
   }
  }else{
   alert('Please enter data!');
   isValid = "";
  }
  return(isValid);
}

//Generate password function
function generatePassword() {
  var pwArr =[];
  var userInput = prompt("How long should this password be? \nEnter a number from 8 to 128: ");
  var tested = errCheck(userInput);
  while (tested !== true) {
    console.log(tested);
    userInput = prompt(userInput + " is not a whole number from 8 to 128\nPlease enter a whole number from 8 - 128");
    tested = errCheck(userInput);
  }
  var caps = confirm("Should we use UPPERCASE letters?");
  if (caps === true){
    pwArr = []
  }
  var lower = confirm("Should we use lowercase letters?");
  var nums  = confirm("Should we use numbers 0 - 9?");
  var special = confirm("Should we use special Characters?\n (\"\?\#!$%&\'" + "()*+,-./:;<=>?@[\\]^_`{|}~)");

}  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
