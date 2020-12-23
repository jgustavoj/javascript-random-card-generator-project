/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

//first action that happens when page loads will be cardFuntion()
window.onload = () => {
  cardFunction();
};
//function with local scopes
let cardFunction = () => {
  //variables and assign an array of strings with all the numbers that will be passed in the card
  let numbers = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "8", "9", "10"];
  //variables with an array of of strings of all the suits
  let suits = ["&#9670", "&#9824", "&#9827", "&#9829"];
  //2 more variables = 1 for random numbers and 1 for random suit that will have a math.floor and math.random
  //the result will become the index for the 2 variables we need in the card
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  //conditonal statement for heart or diamonds - if true the color of the suit will change to red
  if (randomSuit == "&#9670" || randomSuit == "&#9829") {
    document.querySelector(".card").style.color = "red";
  }
  //insert code into html from values obtain in the function
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;
};
