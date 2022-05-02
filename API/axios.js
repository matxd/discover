// Consumindo com Axios
const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.route('/').get((request, response) => {
    axios.get('https://api.github.com/users/matxd')
        .then((result) => response.send(`<img src="${result.data.avatar_url}"/>`))
        .catch((error) => console.error(error))
})