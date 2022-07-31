// Assignment Code
var generateBtn = document.querySelector("#generate");


var charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8" ,"9"];
var charUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charSpecial = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",".","/", ":", ";","<", "=", "?", "@", "[", "^", "_", "`", "{", "]", "|", "}", "~" ];

var passwordInclude =""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var chosenLength =prompt(" Choose the length of your password ( 8-128 characters)"); 

if ((chosenLength <8) || (chosenLength>128)){
  alert("Password must be between 8 and 128 characters");

}else((chosenLength >= 8) && (chosenLength<= 128)) 
  console.log( "Length " + chosenLength);


var includeLower =confirm ( "Do you want to include lower case letters?");

if (includeLower){
  passwordInclude+= charLower;
}

var includeUpper =confirm ("Do you want to include upper case letters?");

if (includeUpper){
  passwordInclude+= charUpper;
}

var includeNumber =confirm ("Do you want to include numbers");

if (includeNumber){
  passwordInclude+= charNumber;
}

var includeSpecial =confirm ("Do you want to include special characters?");

if (includeSpecial){
  passwordInclude+= charSpecial;
}




}
