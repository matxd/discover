const { inherits } = require("util")
const { EventEmitter } = require("events")

const ev = new EventEmitter()

// ev.once escuta apenas uma vez
ev.on("saySomething", (nome) => console.log(`Ouvindo você ${nome}`))

ev.emit("saySomething", "Matheus")
ev.emit("saySomething", "xdm")

function Team(name){
    this.name = name
}

// herdando para a funcão Team todas as opções do EventEmitter 
inherits(Team, EventEmitter) // legado

const espec = new Team("Imperial")
espec.on("csgo", () => console.log(`Aposentados e Perigosos é quem? ${espec.name}`))
espec.emit("csgo")