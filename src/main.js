/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  // se declaran los arreglos
  let simbolos = ["♠", "♥", "♦", "♣"];
  let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  // se generan los random
  let simb = simbolos[Math.floor(Math.random() * simbolos.length)];
  let val = valores[Math.floor(Math.random() * valores.length)];

  // mostramos el resultado con los id asociados

  if (simb == "♥" || simb == "♦") {
    document.getElementById("spa-before").style.color = "red";
    document.getElementById("spa-after").style.color = "red";
  }
  document.getElementById("spa-before").innerHTML = simb;
  document.getElementById("textChange").innerHTML = val;
  document.getElementById("spa-after").innerHTML = simb;
};
