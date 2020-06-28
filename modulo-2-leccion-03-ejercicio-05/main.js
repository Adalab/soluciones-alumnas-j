"use strict";
const title = document.querySelector("h1");
const text = document.querySelector("p");
const advice = document.querySelector("div");

if (advice.classList.contains("success")) {
  console.log("success");
  title.innerHTML = "Correcto";
  text.innerHTML = "Los datos son correctos.";
} else if (advice.classList.contains("error")) {
  console.log("error");
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error.";
} else if (advice.classList.contains("warning")) {
  console.log("warning");
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
}
