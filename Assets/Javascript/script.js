// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assigns the strings to each variable.
 var charNumber = ["0123456789"];
 var charUpper = [ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 var charLower = ["abcdefghijklmnopqrstuvwxyz"];
 var charSpecial = ["!#$%&'()*+,-./:;<=?@[^_`{]|}~"];
let randomPassword= "";
var passwordInclude =[]

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

//Prompts to enter the desired number of characters for the length of the password.
function generatePassword(){
  var chosenLength =prompt(" Choose the length of your password ( 8-128 characters)"); 

  //If statement to alert that the password must be between 8-128 characters.
  if ((chosenLength <8) || (chosenLength>128)){
    alert("Password must be between 8 and 128 characters");
    var chosenLength =prompt(" Choose the length of your password ( 8-128 characters)");

  //Logs the length chosen. 
  }else((chosenLength >= 8) && (chosenLength<= 128)) 
    console.log( "Length " + chosenLength);

  //asks for confirmation to include lower case letters in the password.
  var includeLower =confirm ( "Do you want to include lower case letters? Press OK for yes and Cancel for No");

  //Telling the function whether or not to iclude lower chase characters. If the user chooses to add them, lowercase letters will be displayed in the console. 
  if (includeLower){
    passwordInclude += charLower;
    console.log(charLower)
  }

  //asks for confirmation to include upper case letters in the password.
  var includeUpper =confirm ("Do you want to include upper case letters? Press OK for yes and Cancel for No");

  //Telling the function whether or not to iclude upper chase characters. If the user chooses to add them, uppercase letters will be displayed in the console. 
  if (includeUpper){
    passwordInclude += charUpper;
    console.log(charUpper)
  }

   //asks for confirmation to include numbers in the password.
  var includeNumber =confirm ("Do you want to include numbers? Press OK for yes and Cancel for No");

  //Telling the function whether or not to iclude number characters. If the user chooses to add them, number characters will be displayed in the console.
  if (includeNumber){
    passwordInclude += charNumber;
    console.log(charNumber)
  }

  //asks for confirmation to include special characters in the password
  var includeSpecial =confirm ("Do you want to include special characters? Press OK for yes and Cancel for No");

  //Telling the function whether or not to iclude special characters. If the user chooses to add them, special characters will be displayed in the console.
  if (includeSpecial){
    passwordInclude += charSpecial;
    console.log(charSpecial)

  //If the user does not select any character types to add, alert will display telling the user to choose some parameters.
  }else if (!includeLower && !includeUpper && !includeNumber && !includeSpecial){
    alert("Try again: You must choose parameters")

  }

  // Function takes the users choices and generates and random string of characters of the desired length.
  for (var i=0; i < chosenLength; i++){
    console.log(passwordInclude[Math.floor(3)])
    randomPassword += passwordInclude[Math.floor(Math.random()*passwordInclude.length)];
   
    

  }
  //displays the generated password on the screen.
  console.log(randomPassword)
  return randomPassword;
  
 

}
