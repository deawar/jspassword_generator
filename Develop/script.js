// Assignment Password Generator 
// By Dean Warren for GT Code Camp Full Stack Dev
// Assignment due: 3/21/20 
var generateBtn = document.querySelector("#generate");
var numbersOnly = /^\d+$/;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var punc = ["!", "@", "#", "$", "%", "(", ")",  "?"];
var special = ["^", "&", "*", "_", "+", "~", "`", "|", "}", "{", "[", "]", ":", ";", ">", "<", ".", "/", "\"", "-", "="];
var userInput;
// var headerEl = document.getElementsByClassName("card-header");
var headerEl = $(".card-header");
var button = $("<button>");
var inputGrp = $('<div class= "input-group mb-3"><div class="input-group-prepend"> <div class="input-group-text"> <input type="checkbox" aria-label="Checkbox for following text input" id="numbersOnly"><span></span></div>');
var myValue = document.querySelector("#slideLength");


// Write password to the #password input
function writePassword(myValue) {
  var sliderInput = myValue;
  console.log("Line 22 sliderInput: ", sliderInput,myValue);
  var password = generatePassword(sliderInput);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

//Validate entered number of password characters
function errCheck(myfield) {  //number from userInput
  var myData = myfield;
  console.log("Line 33 MyData: ",myData);
  var isValid;
  if (myData !== '') {
    if ((numbersOnly.test(myData)) && ((myData < 129) && (myData > 7))) {
      isValid = true; //Data entered is good.
      console.log("in function; ", myData); //Verifies date in console.log
    } else if (isValid = false) { //Means user data input is invalid!
    } else {
      alert('Please enter data!');
      isValid = "";
    }
    return (isValid); //but this part works fine uderstood
  }
}

console.log("Line 58 userInput: ",userInput);
writePassword(userInput);

function getUserInput(sliderInput) { //collects the userChoice{} object
var userChoice = {};
//var userInput = prompt("How long should this password be? \nEnter a number from 8 to 128: ");
  //var tested = errCheck(userInput);
  var isCaps;
  var isLower;
  var isNum;
  var isPunc;
  var isSpecial;
  userInput = sliderInput;
  // while (tested !== true) { //Doesn't progress unless valid data is entered.
  //   console.log(tested);
  //   userInput = prompt(userInput + " is not a whole number from 8 to 128\nPlease enter a whole number from 8 - 128");
  //   tested = errCheck(userInput);
  // }

  if ($("#uppercase").is(":checked")){
    isCaps = true;
  } else{
    isCaps = false;
  }
  if ($("#lowercase").is(":checked")){
    isLower = true;
  } else{
    isLower = false;
  }
  if ($("#numbers").is(":checked")){
    isNum = true;
  } else{
    isNum = false;
  }
  if ($("#punctuation").is(":checked")){
    isPunc = true;
  } else{
    isPunc = false;
  }
  if ($("#special").is(":checked")){
    isSpecial = true;
  } else{
    isSpecial = false;
  }
  
    
  userChoice['length'] = userInput;//Creates Object for the types of characters to be used.
    console.log("Line 100 userChoice: ", userChoice.length);
    
    userChoice['caps'] = isCaps;
    console.log("Line 104 userChoice.caps: ", userChoice.caps);
    userChoice['lower'] = isLower;
    //var isNum = confirm("Should we use numbers 0 - 9?");
    userChoice['num'] = isNum;
    userChoice['punctuation'] = isPunc;
    //var isSpecial = confirm("Should we use special Characters?\n (\"\?\#!$%&\'" + "()*+-./:;<=>?@[\\]^_`{|}~)");
    userChoice['special'] = isSpecial;
    
    //If user enters a length and cancels all other choices we check that here.
    if ((userChoice.caps === false) && (userChoice.lower === false) && (userChoice.num === false) && (userChoice.punctuation === false) &&(userChoice.special === false)) {
      
      return userChoice.caps = "";
    }
    console.log("Line 105 userChoice: ",userChoice);
    return userChoice;
}

//Randomize Possible Array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}


//Generate password function
function generatePassword(sliderInput) {
  var userChoice = getUserInput(sliderInput);
  console.log("Line 146 is uerChoice: ",userChoice); //Checks the object was passed as exspected.
  var pwArr = []; //final password array.
  var possArr = []; //array of possible characters from user choices.
  if (userChoice.caps) {
    possArr = possArr.concat(uppercase);
  }
  if (userChoice.lower) {
    possArr = possArr.concat(lowercase);
  }
  if (userChoice.special) {
    possArr = possArr.concat(special);
  }
  if (userChoice.num) {
    possArr = possArr.concat(numbers);
  }
  if (userChoice.punctuation) {
    possArr = possArr.concat(punc);
  }

  shuffle(possArr);
  console.log("possArr: ",possArr);
  //generates the password.
  console.log("Line 161 userChoice.length: ",userChoice.length)
  for (var i = 0; i < userChoice.length; i++) {
    pwArr.push(possArr[Math.floor(Math.random() * possArr.length)]);
  }
  console.log(pwArr); //demonstrates array output in console.
  console.log('password: ', password); //demonstrates the cleaned up password in console.
  return password = (pwArr.toString()).replace(/,/g, ''); //converts pwArr to string and removes commas.

}
function setClipboardText(text){
  var id = "password";
  var existsTextarea = document.getElementById(id);

  // if(!existsTextarea){
  //   console.log("Creating textarea");
  //   var textarea = document.createElement("textarea");
  //   textarea.id = id;
  //   // Place in top-left corner of screen regardless of scroll position.
  //   textarea.style.position = 'fixed';
  //   textarea.style.top = 0;
  //   textarea.style.left = 0;

  //   // Ensure it has a small width and height. Setting to 1px / 1em
  //   // doesn't work as this gives a negative w/h on some browsers.
  //   textarea.style.width = '1px';
  //   textarea.style.height = '1px';

  //   // We don't need padding, reducing the size if it does flash render.
  //   textarea.style.padding = 0;

  //   // Clean up any borders.
  //   textarea.style.border = 'none';
  //   textarea.style.outline = 'none';
  //   textarea.style.boxShadow = 'none';

  //   // Avoid flash of white box if rendered for any reason.
  //   textarea.style.background = 'transparent';
  //   document.querySelector("body").appendChild(textarea);
  //   console.log("The textarea now exists :)");
  //   existsTextarea = document.getElementById(id);
  // }else{
  //     console.log("The textarea already exists :3")
  // }

  existsTextarea.value = text;
  console.log("Text: ", text.view.password);
  existsTextarea.select(text.view.password);

  try {
      var status = document.execCommand('copy');
      if(!status){
          console.error("Cannot copy text");
      }else{
          console.log("The text is now on the clipboard");
      }
  } catch (err) {
      console.log('Unable to copy.');
  }
}
// Add event listener to generate button
$("#numbers").onclick
generateBtn.addEventListener("click", setClipboardText);


$("#myRange").bind("slider:changed", function (event, data) {
  event.preventDefault();
  // The currently selected value of the slider
  myValue = data.value;
  $("#slideLength").html(data.value);
  console.log("slider value: ",myValue);
  writePassword(myValue);
  
});