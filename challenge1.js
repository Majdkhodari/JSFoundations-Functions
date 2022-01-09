/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

const { list } = require("babel-core/lib/util")

function printName() {
    console.log("Majd")
}

printName()

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge (birth, year=2022) {

  console.log (` ${year - birth}`)
}
printAge(1997)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */


function printHello(name, language) {

  let Hello
    if ( language === "en"){
      Hello = "Hello" }
      else if ( language === "es")
      {Hello = "Hola"}
      else {
        Hello = "Hello"
      }
      
    
}

printHello("Majd", en)

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */


function printMax(n1, n2) {

n1 = 5
n2 = 10

if (n1 > n2) {
  console.log (n1)
} else {console.log (n2)}
}
printMax(1, 6)