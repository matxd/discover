// JavaScript é uma linguagem com tipagem dinâmica

// string -> aspas duplas, aspas simples, interpolação com template string
const typeString = ["Matheus", "Matheus", `Matheus ${1 + 1}`];

// number -> inteiro, reais, NaN
const typeNumber = [50, 15.8, NaN];

// boolean -> true, false
const typeBoolean = [true, false];

// object -> { propriedade: valor }
const typeObjObject = { nome: "Matheus", id: 7 };

// array -> []
const typeObjArray = ["Matheus", 89];

// undefined x null
const isEqual = undefined === null; 

// -------------------------------------------------

// variaveis -> var (global-reatribuida), let (local-reatribuida), const (local-não reatribuida)
var global = 333
let local = 777
const constante = 999

// -------------------------------------------------

// function ( sofre hoisting )
function createPhrases(){
    return console.log("Paciência e Persistência")
}

// function anonymous, function expression ( não sofre hoisting )
const sum = function(a, b){
    let total = a + b
    return console.log(total)
}

// arrow function ( não sofre hoisting )
const sayMyName = (name) => {
    return console.log(name)
}

// callback function
function chooseAColor(color){
    return color()
}
//chooseAColor(() => { console.log("Purple") })

// function constructor
function Person(name){
    this.name = name // this se referencia a constante mth
    this.walk = function(){ 
        return `${this.name} está andando` 
    }
}
const mth = new Person("Matheus") // instanciando o objeto
//console.log(mth.walk())

// -------------------------------------------------

// string to number
let string = "123"
console.log(Number(string))

// number to string
let number = 465
console.log(String(number))

// alguns metodos
let float = 345.5553546.toFixed(2).replace(".", ",")
let myName = "Matheus R".toUpperCase()
let myIncludes = myName.includes("JOAO")
let myArray = myName.split(" ")
let myUnderscore = myArray.join("_")

// array com constructor
let arrayConstructor = new Array("a", "b", "c")
let arrayWithTypes = ["a", { id: 7 }, () => { return "arrow function dentro do array" }]

// manipulando arrays
let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("react native")
// adicionar no começo
techs.unshift("nodejs")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos
techs.slice(2, 3)
// remover 1 ou mais itens em qualquer posição
techs.splice(1, 1)
// encontrar a posição de um elemento
techs.indexOf("js")