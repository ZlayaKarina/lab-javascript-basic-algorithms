// Iteration 1: Names and Input
let hacker1 = 'Sasha'
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Karina'
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
var j = ""
for (let i = 0; i < hacker1.length; i++){
    j += hacker1[i].toUpperCase() + " "
}
console.log(j.trim())

let y = ""
for (let i = hacker1.length - 1; i >=0; i--){
    y += hacker1[i]
}
console.log(y)


if (hacker1 > hacker2){
    console.log(`The driver's name goes first.`)
} else if (hacker1 < hacker2){
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}