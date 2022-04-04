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
createPhrases()

// function anonymous, function expression ( não sofre hoisting )
const sum = function(a, b){
    let total = a + b
    return console.log(total)
}
sum(6, 4)

// arrow function ( não sofre hoisting )
const sayMyName = (name) => {
    return console.log(name)
}
sayMyName("Matheus")

// callback function
function chooseAColor(color){
    return color()
}
chooseAColor(() => { console.log("Purple") })

// function constructor
function Person(name){
    this.name = name // this se referencia a constante mth
    this.walk = function(){ 
        return `${this.name} está andando` 
    }
}
const mth = new Person("Matheus") // instanciando o objeto
console.log(mth.walk())