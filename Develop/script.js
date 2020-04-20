// Assignment Password Generator 
// By Dean Warren for GT Code Camp Full Stack Dev
// Assignment due: 3/21/20 
var generateBtn = document.querySelector("#generate");
var numbersOnly = /^\d+$/;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var punc = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ".", "/", "\"", "-", "="];
// var headerEl = document.getElementsByClassName("card-header");
var headerEl = $(".card-header");
var button = $("<button>");
var inputGrp = $('<div class= "input-group mb-3">   <div class="input-group-prepend"> div class="input-group-text"> <input type="checkbox" aria-label="Checkbox for following text input"></div>');

headerEl.append(inputGrp)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Validate entered number of password characters
function errCheck(myfield) {  //number from userInput
  var myData = myfield;
  var isValid;
  if (myData !== '') {
    if ((numbersOnly.test(myData)) && ((myData < 129) && (myData > 7))) {
      isValid = true; //Data entered is good.
      console.log("in function; ", myData); //Verifies date in console.log
    } else {
      isValid = false; //Means user data input is invalid!');
    }
  } else {
    alert('Please enter data!');
    isValid = "";
  }
  return (isValid); //but this part works fine uderstood
}

function getUserInput() { //collects the userChoice{} object
  var userChoice = {};
  var userInput = prompt("How long should this password be? \nEnter a number from 8 to 128: ");
  var tested = errCheck(userInput);
  while (tested !== true) { //Doesn't progress unless valid data is entered.
    console.log(tested);
    userInput = prompt(userInput + " is not a whole number from 8 to 128\nPlease enter a whole number from 8 - 128");
    tested = errCheck(userInput);
  }
  userChoice['length'] = userInput;//Creates Object for the types of characters to be used.
  var isCaps = confirm("Should we use UPPERCASE letters?");
  userChoice['caps'] = isCaps;
  var isLower = confirm("Should we use lowercase letters?");
  userChoice['lower'] = isLower;
  var isNum = confirm("Should we use numbers 0 - 9?");
  userChoice['num'] = isNum;
  var isSpecial = confirm("Should we use special Characters?\n (\"\?\#!$%&\'" + "()*+-./:;<=>?@[\\]^_`{|}~)");
  userChoice['special'] = isSpecial;

  //If user enters a length and cancels all other choices we check that here.
  if ((userChoice.caps === false) && (userChoice.lower === false) && (userChoice.num === false) && (userChoice.special === false)) {
    alert("No usable characters chosen.\nPlease choose at least one character type.\nClick Generate Password to restart.");
    return userChoice.caps = "";
  }
  console.log(userChoice);
  return userChoice;
}

//Generate password function
function generatePassword() {
  var userChoice = getUserInput();
  console.log(userChoice); //Checks the object was passed as exspected.
  var pwArr = []; //final password array.
  var possArr = []; //array of possible characters from user choices.
  if (userChoice.caps) {
    possArr = possArr.concat(uppercase);
  }
  if (userChoice.lower) {
    possArr = possArr.concat(lowercase);
  }
  if (userChoice.num) {
    possArr = possArr.concat(numbers);
  }
  if (userChoice.special) {
    possArr = possArr.concat(punc);
  }
  //generates the password.
  for (var i = 0; i < userChoice.length; i++) {
    pwArr.push(possArr[Math.floor(Math.random() * possArr.length)]);
  }
  console.log(pwArr); //demonstrates array output in console.
  console.log('password: ', password); //demonstrates the cleaned up password in console.
  return password = (pwArr.toString()).replace(/,/g, ''); //converts pwArr to string and removes commas.

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
