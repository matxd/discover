// callback function é uma função que é passada com argumento de outra função e depois é chamada de volta
function imprimirDado(dado){
    console.log(dado())
}
imprimirDado( () => { return "Hello World" } )

// setTimeout(callback, delay)
setTimeout(() => {
    console.log("Depois de 1s")
}, 1000)


const https = require("https")
const API = "https://jsonplaceholder.typicode.com/users?_limit=2"

https.get(API, response => {
    console.log(response.statusCode)
})
console.log("conectando API")