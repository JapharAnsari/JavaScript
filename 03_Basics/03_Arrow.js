
// ********************************** This Keyword *****************************

const user  = {
    username: "Japhar",
    price: 999,

    welcomeMassege: function(){
        console.log(`${this.username}, Welcome to the Website..`);
        
    }
}
user.welcomeMassege()
// if you want to change the username
user.username = "Pintu"
user.welcomeMassege()


// ******************* Arrow Function **************************

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(3,4))

// another way to define arrow function

const addtwo = (num1, num2) => num1+num2
console.log(addtwo(3,5));

// or
const add = (num1, num2) => (num1+num2)
console.log(add(3,10));

