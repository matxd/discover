/*

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/

function classificaNota(nota){
    if(nota === undefined || nota < 0){
        console.log("Digite uma nota válida")
    } else{
          if(nota >= 90){
            console.log(`Nota A - ${nota}`)
            return
        } if(nota >= 80 && nota <= 89){
            console.log(`Nota B - ${nota}`)
            return
        } if(nota >= 70 && nota <= 79){
            console.log(`Nota C - ${nota}`)
            return
        } if(nota >= 60 && nota <= 69){
            console.log(`Nota D - ${nota}`)
            return
        } if(nota < 60 && nota >= 0){
            console.log(`Nota F - ${nota}`)
        }
    }
}
classificaNota(75)