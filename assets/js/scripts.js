// Assignment Code
var generateBtn = document.querySelector("#generate");

// return a random password
function generatePassword() {
  alert("Please complete the following criteria to determine the password format.");
  var char_length = prompt("How many characters should the password be? Passwords must be between 8 and 128 characters long.");
  
  if (char_length < 8 | char_length > 128){
    alert("Please click 'Generate Password' and try again. Passwords must be between 8 and 128 characters long.");
    return;
  }
  
  var lowercase = confirm("Would you like lowercase letters in the password?");
    if (lowercase === true) {
      alert("You've selected 'Yes' to include lowercase letters.");
    } else {alert("You've selected to exclude lowercase letters.")};
  var uppercase = confirm("Would you like uppercase letters in the password?");
    if (uppercase === true) {
      alert("You've selected 'Yes' to include uppercase letters.");
    } else {alert("You've selected to exclude uppercase letters.")};
  var numeric = confirm("Would you like numbers in the password?");  
    if (numeric === true) {
        alert("You've selected 'Yes' to include numbers.");
      } else {alert("You've selected to exclude numbers.")};
  var specials = confirm("Would you like special characters in the password?");
    if (specials === true) {
        alert("You've selected 'Yes' to include special characters.");
      } else {alert("You've selected to exclude special characters.")};
  
  var alpha_lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alpha_upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number_chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special_chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var character_types = [];
  var password = "";
  
  if (lowercase === true) {
    character_types.push(alpha_lower);
  }
  
  if (uppercase === true) {
    character_types.push(alpha_upper);
  }
  
  if (numeric === true) {
    character_types.push(number_chars);
  }
  
  if (specials === true) {
    character_types.push(special_chars);
  }
  
  for (i = 0; i < character_types.length; i++){
    var choose_char = character_types[i];    
    var chosen_character = choose_char[Math.floor(Math.random() * choose_char.length)];
    password += chosen_character;
  }
  
  for (i = 0; i < char_length-character_types.length; i++){
    var choose_char = character_types[Math.floor(Math.random() * character_types.length)];    
    var chosen_character = choose_char[Math.floor(Math.random() * choose_char.length)];
    password += chosen_character;
  }
  return password;
  // return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);