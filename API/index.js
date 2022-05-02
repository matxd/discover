// Requisições feitas com insomnia

const express = require('express')
const app = express()

app.listen('3000')

// middleware -> ponte entre requisições
app.use(express.json())

let author = "Matheus"

app.route('/').get((request, response) => response.send(author))

app.route('/').post((request, response) => response.send(request.body))

app.route('/').put((request, response) => {
    author = request.body.author
    response.send(author)
})

app.route('/:id').delete((request, response) => {
    response.send(request.params.id)
})