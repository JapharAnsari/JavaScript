
// const tinderUser = new Object()  // SingleTone Object
const tinderUser = {}  // Non SingleTone Object   

tinderUser.id = "123abc",
tinderUser.name = "Suman",
tinderUser.isLogged = false

// console.log(tinderUser);


// Nested Functions

const regularUser = {
    email: "Crazy123@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Japhar",
            LastName: "Ansari"
        }
    }

}
// console.log(regularUser.fullname);

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"A", 4:"B"}

const obj3 = {obj1, obj2}
console.log(obj3);

// other way
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);

// Latest way

const obj5 = {...obj1,...obj2}
console.log(obj5);





