const { use } = require("react");

let a = 300

if (true){
    let a = 10
    const b = 20
    console.log("Enner:",a);     // Local Scope
    
}

console.log(a);         // Globle Scope


// More

function one(){
    const username = "Japhar"

    function two(){
        const lastname = "Ansari"
        console.log(username)
    }

    // console.log(lastname);  // not accesible outside of the function
    two()
}
one()


// More

if (true) {
    const username = "Japhar"
    if (username == "Japhar"){
        const website = "Youtube"
        console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);


