// setTimeout vai rodar uma função depois de determinado tempo contabilizados em milissegundos

const timeOut = 1000

const finished = () => console.log("Done!")
let timer = setTimeout(finished, timeOut)

// clearTimeout vai cancelar um time-out

clearTimeout(timer)

// setInterval irá rodar uma função N vezes depois de terminado tempo

const checking = () => console.log("checking!")
let interval = setInterval(checking, timeOut)

// clearInterval vai cancelar um interval registrado

setTimeout(() => clearInterval(interval), 4000)