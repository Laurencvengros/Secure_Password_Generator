// Assignment Code
var generateBtn = document.querySelector("#generate");


 var charNumber = ["0123456789"];
 var charUpper = [ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 var charLower = ["abcdefghijklmnopqrstuvwxyz"];
 var charSpecial = ["!#$%&'()*+,-./:;<=?@[^_`{]|}~"];
let randomPassword= "";
var passwordInclude =[]

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
    var chosenLength =prompt(" Choose the length of your password ( 8-128 characters)");

  }else((chosenLength >= 8) && (chosenLength<= 128)) 
    console.log( "Length " + chosenLength);


  var includeLower =confirm ( "Do you want to include lower case letters?");

  if (includeLower){
    passwordInclude += charLower;
    console.log(charLower)
  }

  var includeUpper =confirm ("Do you want to include upper case letters?");

  if (includeUpper){
    passwordInclude += charUpper;
    console.log(charUpper)
  }

  var includeNumber =confirm ("Do you want to include numbers?");

  if (includeNumber){
    passwordInclude += charNumber;
    console.log(charNumber)
  }

  var includeSpecial =confirm ("Do you want to include special characters?");

  if (includeSpecial){
    passwordInclude += charSpecial;
    console.log(charSpecial)

  }else if (!includeLower && !includeUpper && !includeNumber && !includeSpecial){
    alert("Try again: You must choose parameters")

  }

  
  console.log(passwordInclude)
  for (var i=0; i < chosenLength; i++){
    console.log(passwordInclude[Math.floor(3)])
    randomPassword += passwordInclude[Math.floor(Math.random()*passwordInclude.length)];
    //randomPassword = passwordInclude[Math.floor(Math.random()*passwordInclude.chosenLength)];
    

  }
  console.log(randomPassword)
  return randomPassword;
 

}
