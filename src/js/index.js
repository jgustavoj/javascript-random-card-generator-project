/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

// first Attemps at onload functions query
// window.onload = function() {
//   document.querySelector(".number").innerHTML = generateRandomNumber();
//   //document.querySelectorAll(".suits").innerHTML = generateRandomSuit();
//   document.querySelector(".top-suit").innerHTML = generateRandomSuit();
//   //document.querySelector(".bottom-suit").innerHTML = generateRandomSuit();
// };

// window.onload = function() {
//   document.querySelector(".number").innerHTML = generateRandomNumber();
//   let suitDivs = document.querySelectorAll(".suits");
//   let randomlySelectedSuit = generateRandomSuit();
//   for (let div of suitDivs) {
//     div.innerHTML = randomlySelectedSuit.suit;
//     div.style.color = randomlySelectedSuit.color;
//   }
// };

// let generateRandomNumber = () => {
//   let numbers = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "8", "9", "10"];
//   let indexNumbers = Math.floor(Math.random() * numbers.length);
//   return numbers[indexNumbers];
// };

// //My function suit
// let generateRandomSuit = () => {
//   let pokerSuit = [
//     { suit: "&#9670;", color: "black" },
//     { suit: "&#9824;", color: "black" },
//     { suit: "&#9827;", color: "black" },
//     { suit: "&#9829;", color: "red" }
//   ];
//   let indexSuit = Math.floor(Math.random() * pokerSuit.length);
//   return pokerSuit[indexSuit];
// };

window.onload = () => {
  cardFunction();
};

let cardFunction = () => {
  let numbers = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "8", "9", "10"];
  let suits = ["&#9670", "&#9824", "&#9827", "&#9829"];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  if (randomSuit == "&#9670" && randomSuit == "&#9829") {
    document.querySelector(".card").style.color = "red";
  }
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;
};
