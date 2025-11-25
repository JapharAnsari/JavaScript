const fruits = ["Mango", "Apple", "Grapps", "Banana"]
const Vegetables = ["GreenChilli", "Patoto", "Tomato"]

// fruits.push(Vegetables)
// console.log(fruits);

// fruits.concat(Vegetables)
// console.log(fruits);


const all = fruits.concat(Vegetables)
console.log(all);

// Another and new way

const newall = [...fruits,...Vegetables]
console.log(newall);


// more
const anotherArray = [20, 40, 60, [1, 2, 3], 7, [90, 80]]
const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray);


console.log(Array.isArray("Japhar"));
console.log(Array.from("Ansari"));






