//Primitve datatype

// 7 types : string , Number , Boolean, null,undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

//Reference (non primitive)

//Array,Objects, functions

const heros = ["shaktiman","Captain America","Ironman"];
let myObj = { name: "Akanksha",age: 22,}

const myFunnction = function(){
    console.log("Hello world");

    console.log(typeof anotherId);
}
    
    //+++++++++++++++++++++++++++++++++++++++

    //  Stack (Premitive) , heap (Non-Premitive)

    let myYoutubename = "hiteshchoudharydotcom"

    let anothername = myYoutubename
    anothername = "chaiaurcode"

    console.log(myYoutubename);
    console.log(anothername);
    
    let userOne = {
        email: "user@google.com",
        upi: "user@ybl"
    }

    let userTwo = userOne

    userTwo.email = "hitesh@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);
    
    
    
    

