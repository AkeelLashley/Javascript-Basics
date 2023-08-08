// Printing Hello to the console
console.log("Hello")

let myName = "Akeel";
let myAge = 24;

console.log(myAge)

console.log(myName)

myAge = 25;

console.log(myAge)

console.log("Hello my name is " + myName + " I am " + myAge + " Years old." ) 


let dogCounter = 2;
let catCount = 5;

let numberOfPets = dogCounter + catCount;

console.log("I have " + numberOfPets + " Pets")


let daysPerWeek = 7
let weeksPerYear = 52
let daysPerYear = daysPerWeek * weeksPerYear
console.log(daysPerYear)



let balance = 2

console.log("Current Balance " + balance)

balance  = balance - 10
console.log("Updated Balance " + balance)

balance += 10
console.log("Updated Balance " + balance)



myAge++

console.log(myAge)


function Greeting() {
    console.log("Hello")

}

Greeting()





let dogCount = 0;

function addDog() {
    dogCount++
    document.getElementById("dogCounter").textContent = dogCount + " dog(s)"
}

// Create a function to delete 1 dog. Update the dogCounter element id everytime the function is called









document.getElementById("catCounter").textContent = "2 cats"







function addUserInput() {
   let firstInputField =  Number(document.getElementById("num1-el").value)
   let num2 = Number(document.getElementById("num2-el").value)

   let sum = num1 + num2 


    console.log(sum)
    document.getElementById("sum-el").textContent = "Sum: " + sum
}


// function addUserInput() {

//     let num1 = Number(document.getElementById("num1-el").value)
//     let num2 = Number(document.getElementById("num2-el").value)


//     let sum = num1 + num2
//     document.getElementById("sum-el").textContent = "Sum: " + sum

// }