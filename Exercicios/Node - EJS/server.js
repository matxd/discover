const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", (request, response) => { response.render("pages/index") })
app.get("/sobre", (request, response) => { response.render("pages/about") })

app.listen(8080)