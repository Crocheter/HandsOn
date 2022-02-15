const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "Abisola Odutayo";
console.log(myName);

const firstName = "Abisola";
const lastName = "Odutayo";

const sentence = "Hello " + firstName + " " + lastName + "! How are you?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;
console.log(sentence);
console.log(sentenceWithTemplate);

const lightIsOn = false;

if (lightIsOn) {
    console.log("The light is on!");
} else {
    console.log("The light is _ not on!")
}
// always use triple =
// context is similar to scope, 
// topics to read again: 
// Arrays are ordered list of anything or something, we use the square brackets, there is something called "join", another called "push"
const character = "a";
const timesToRepeat = 50;
let answer = '';
for (let i = 0; i <= timesToRepeat; i++){
    answer += character;
}
console.log(answer);

// Events and listeners
const button = document.querySelector('.event-button');
button.addEventListener('click', function () {
    alert("Hey there!");
});
