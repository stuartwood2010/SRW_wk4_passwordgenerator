5869// Assignment Code
let generateBtn = document.querySelector("#generate");
let Upper = true;
let lower = true;
let numbers = true;
let specialchars =true;
let characterarray = [];

console.log(characterarray);

function generatePassword() {
  /*When the user clicks the generate button, prompt the user to pick a password length between 8 and 128 characters */
  const charlength = prompt("How many characters would you like the password to contain? Minimum = 8, Maximum = 128");
    
  /*Log the desired password length to the console*/
  console.log("charlength " + charlength);

  /*If password is approved length move to next prompt. If length is not approved prompt alert to user */
  if (charlength >= 8 && charlength <= 128) {
    /*Ask the user if he/she wants to include Uppercase letters in the password*/
    Upper = confirm("Would you like the password to include Uppercase Letters?");
  } else {
    alert("Password must be between 8 and 128 characters.");
    return null;
  }

  /*If user confirms the use of UPPERcase letters, add all UPPERcase Letters to the characterarray*/
  if (Upper) {
    characterarray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

  /*log the characterarray to the console*/
  console.log(characterarray);

  /*Ask the user if he/she wants to include lowercase letters in the password */
  lower = confirm("Would you like the password to include lowercase letter?");    

  /*If user confirms the use of lowercase letters, add all lowercase letters to the characterarray*/
  if (lower) {
    characterarray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }

  /*log the characterarray to the console*/
  console.log(characterarray);

  /*Ask the user if he/she wants to include numbers in the password */
  numbers = confirm("Would you like the password to include numbers?");

  /*If user confirms the use of numbers, add all numbers to the characterarray*/
  if (numbers) {
    characterarray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }

  /*log the characterarray to the console*/
  console.log(characterarray);

  /*Ask the user if he/she wants to include special characters in the password */
  specialchars = confirm("Would you like the password to include special characters?");        

  /*If user confirms the use of special characters, add all special characters to the characterarray*/
  if (specialchars) {
    characterarray.push("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", '"', "}", "~");
  }
        
  /*log the characterarray to the console*/
  console.log(characterarray);

  /*Generates a random character from the characterarray and logs it to the console*/
   for (let i = 0; i < parseInt(charlength); i++){
     randomchar = Math.floor(Math.random() * characterarray.length);
     console.log(randomchar, characterarray[randomchar]);
    }
  
  

}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
