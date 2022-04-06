/*

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

function conversorTemperatura(valor){
    const verificaCelsius = valor.toUpperCase().includes("C")
    const verificaFahrenheit = valor.toUpperCase().includes("F")

    const atualizaCelsius = Number(valor.toUpperCase().replace("C", ""))
    const atualizaFahrenheit = Number(valor.toUpperCase().replace("F", ""))

    const celsius = (atualizaFahrenheit - 32) * 5 / 9
    const fahrenheit = atualizaCelsius * 9 / 5 + 32

    if(!verificaCelsius && !verificaFahrenheit) { throw "Grau invalido" }

    if(verificaCelsius){
        console.log(`O valor em graus Fahrenheit é - ${fahrenheit.toFixed(1).replace(".", ",")}°F`)
    } else if(verificaFahrenheit){
        console.log(`O valor em graus Celsius é - ${celsius.toFixed(1).replace(".", ",")}°C`)
    }
}
conversorTemperatura("40c")