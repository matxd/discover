/* 

Estagios de uma Promise

Pending: Estado inicial, assim que o objeto da promise é iniciado
Fulfilled: Promise concluida com sucesso
Rejected: Promise rejeita, houve um erro
Settled: Promise dando certo ou errado vai ser concluida

*/

let aceitar = false

console.log("Pedindo uber")

const promessa = new Promise((resolve, reject) => {
    if(aceitar){
        return resolve("Carro chegou")
    }
    return reject("Pedido negado")
})

promessa.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log("Promise finalizada"))
 
console.log("Aguardando")