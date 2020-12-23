import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

//first action that happens when page loads will be cardFuntion()
window.onload = () => {
  cardFunction();
};
let cardFunction = () => {
  let numbers = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "8", "9", "10"];
  let suits = ["&#9670", "&#9824", "&#9827", "&#9829"];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  if (randomSuit == "&#9670" || randomSuit == "&#9829") {
    document.querySelector(".card").style.color = "red";
  }
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;
};

//Strategy
//function with local scopes
//variables and assign an array of strings with all the numbers that will be passed in the card
//variables with an array of of strings of all the suits
//2 more variables = 1 for random numbers and 1 for random suit that will have a math.floor and math.random
//the result will become the index for the 2 variables we need in the card
//conditonal statement for heart or diamonds - if true the color of the suit will change to red
//insert code into html from values obtain in the function
