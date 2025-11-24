
//  Variable 

const accountId = 8052                   // This is right way for creating a Variable in JS
let accountEmail = "Japhar798@gmail.com" // This is also Right way
var accountPassword = "6354"             // This a Oldest way for creating a variable in JS

accountCity = "Kushinagar"      // This is bad way for creating a JS
let accountDetails;  // if you create a varibale but not given any value then it return only undefine


// lets print the variable values

console.log(accountId)
console.log(accountEmail)

// if you want to print all varibale values in one way 

console.table([accountId, accountEmail, accountCity,accountPassword])
