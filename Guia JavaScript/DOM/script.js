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

// parentNode e parentElement

body.parentNode
body.parentElement

// Criando e adicionando elementos HTML

const div = document.createElement("div")
div.innerText = "Div criada com 'createElement'"

// append e prepend
body.append(div)

// insert before
const script = document.querySelector("script")
body.insertBefore(div, script)

// Eventos

elementSelector.addEventListener("click", print)

function print(){
    console.log("Clicou")
}

input.onkeydown = (event) => { console.log(event) }