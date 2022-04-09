// Seletores HTML

const elementID = document.getElementById("title-id")
const elementClass = document.getElementsByClassName("title-class")
const elementTag = document.getElementsByTagName("h1")
const elementSelector = document.querySelector("#title-id")
const elementSelectorAll = document.querySelectorAll("meta")

// Manipulando HTML

elementSelector.textContent = "Text Content"
elementSelector.innerText = "Inner Text"
elementSelector.innerHTML = "Inner HTML - <button>Clique</button>"

const input = document.querySelector("input")
input.value = "Manipulando valor"

const header = document.querySelector("header")
header.setAttribute("id", "id-dom")
header.getAttribute("id")
header.removeAttribute("id")

// Manipulando estilos

const body = document.querySelector("body")
body.style.backgroundColor = "#999"

body.classList.add("class") // adiciona uma class ao elemento
body.classList.remove("class") // remove a class do elemento
body.classList.toggle("class") // On, Off