/* 

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

const familia = {
    ganhos: [2551.30, 350.60, 2000, 3453.54],
    despesas: [3218.50, 1150.25, 2888.45, 150.68],
}

function calculaSaldo(valores){
    let totalValor = 0
    for(let valor of valores){
        totalValor += valor
    }
    return totalValor   
}

function saldoFinal(){
    const ganhos = calculaSaldo(familia.ganhos)
    const despesas = calculaSaldo(familia.despesas)
    const saldo = ganhos - despesas
    
    if(saldo >= 0){
        console.log(`O saldo final da familia foi de R$ ${saldo.toFixed(2).replace(".", ",")} (POSITIVO)`)
    } else {
        console.log(`O saldo final da familia foi de R$ ${saldo.toFixed(2).replace(".", ",")} (NEGATIVO)`)
    }
}
saldoFinal()