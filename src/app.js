/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function random_generator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let random_who = Math.floor(Math.random() * who.length);
    let random_action = Math.floor(Math.random() * action.length);
    let random_what = Math.floor(Math.random() * what.length);
    let random_when = Math.floor(Math.random() * when.length);
    let sentence =
      who[random_who] +
      " " +
      action[random_action] +
      " " +
      what[random_what] +
      " " +
      when[random_when];

    return sentence;
  }

  let button_random = document.getElementById("new_random");
  let sentenceElement = document.getElementById("sentence_final");

  function handleClick() {
    let random_function = random_generator();
    sentenceElement.textContent = random_function;
  }

  button_random.addEventListener("click", handleClick);
  let random_sentence = random_generator();
  sentenceElement.textContent = random_sentence;
};
