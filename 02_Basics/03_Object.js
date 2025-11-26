
// singletone Object Creation
// Object.create


// Object Literals
const JsUser = {
    name: "Japhar",
    age: 23,
    location: "Kushinagar",
    email: "japharansari798@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name);
// console.log(JsUser["email"]);

// Changing the values of already given object

JsUser.email = "crazy23@gmail.com"
console.log(JsUser.email);

// Freezing the values

// Object.freeze(JsUser)


// add function inside a object

JsUser.greeting = function(){
    console.log("Hello JS User..");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




