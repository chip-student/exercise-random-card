/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // se declaran los arreglos
  let simbolos = ["card spade", "card diamond", "card club", "card heart"];
  let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  // se generan los random
  let simb = simbolos[Math.floor(Math.random() * simbolos.length)];
  let val = valores[Math.floor(Math.random() * valores.length)];

  // mostramos el resultado con los id asociados
  //asignamos la clase
  document.querySelector(".container").children[0].className = simb;

  let p = document.createElement("P");
  p.innerHTML = val.toString();
  p.style.fontSize = "50px";
  p.style.fontfamily = "Arial, sans-serif";

  if (simb == "card heart" || simb == "card diamond") {
    p.style.color = "red";
  }
  //Se ingresan el random del valores
  document.querySelector(".container").children[0].append(p);
};
