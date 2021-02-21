// Assignment Code
var generateBtn = document.querySelector("#generate");    
//onclick btn to generate
var userpw="";
var userLength;//number run a forloop based on length
var lower=['a','b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w', 'x','y','z'];
var upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number=[0,1,2,3,4,5,6,7,8,9];
var chars=['!','@','#','$','%','&','*','?'];


//confirms
var isLower;
var isUpper;
var isNumber;
var isChar;
var criteria;


[
  // ['a','b','c'],
  // [1,2,3]
]; 
// masterArray[0][1]
//everythign they say yes to





//frontend 
//display pw #password

//onclickbtn #generate


//this is the generate pw function it asks user for prompts
//takes in user prompts and returns out a randomized pw
function generatePassword(){
  //:series of prompts 
  //length (8-128 chars limit LATER)
  userLength=parseInt(prompt("what is your length?"))   //returns string (convert to num parseInt())
  //lowercase, //confirm
  if (userLength < 8 || userLength > 128) {
    // Validates user input
    // Start user input prompts
    userLength = parseInt(prompt("You must choose between 8 and 128"));}

  else 
  {
  isLower=confirm("Do you want lower case?")
  isUpper=confirm("Do you want upper case?") 
  
  isNum=confirm("do you want numbers?") 

  isChar=confirm("Do you want special characters?")}
  //special characters

    // Else if for 4 negative options
    if (!isChar && !isNumber && !isUpper && !isLower) {
      criteria = alert("You must choose a criteria!");

  }
  // First if statement that uses user input prompts to determine criteria
  // Else if for 4 positive options
  else if (isChar && isNumber && isUpper && isLower) {

      criteria = chars.concat(number, lower, upper);
  }
  // Else if for 3 positive options
  else if (isChar && isNumber && isUpper) {
      criteria = chars.concat(number, upper);
  }
  else if (isChar && isNumber && isLower) {
      criteria = chars.concat(number, lower);
  }
  else if (isChar && isLower && isUpper) {
      criteria = chars.concat(lower, upper);
  }
  else if (isNumber && isLower && isUpper) {
      criteria = number.concat(lower, upper);
  }
  // Else if for 2 positive options 
  else if (isChar && isNumber) {
      criteria = chars.concat(number);

  } else if (isChar && isLower) {
      criteria = chars.concat(lower);

  } else if (isChar && isUpper) {
      criteria = chars.concat(upper);
  }
  else if (isLower && isNumber) {
      criteria = lower.concat(number);

  } else if (isLower && isUpper) {
      criteria = lower.concat(upper);

  } else if (isNumber && isUpper) {
      criteria = number.concat(upper);
  }
  // Else if for 1 positive option
  else if (isChar) {
      criteria = chars;
  }
  else if (isNumber) {
      criteria = number;
  }
  else if (isLower) {
      criteria = lower;
  }

  for (var i = 0; i < userLength; i++) {
     userpw += criteria[Math.floor(Math.random() * criteria.length)];
  
}
 



 
    // Math.floor(Math.random() * (max - min) + min);
  

//generate pw (math.random)
// validate: least one character type should be selected


  //return function
  return userpw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    //once done display on page or alert
    //display pw #password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
//when user clicks on btn call the writePasword function
// WHEN I click the button 


// //return fx
// function mult(x,y){
//   return x*y;
// }
// var result=mult(3,4);
// console.log(result);
// console.log(mult(5,6))

// //display fx
// function mult1(a,b){
//   console.log(a*b)
// }

// mult(1,2)
