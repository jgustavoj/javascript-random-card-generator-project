/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

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
