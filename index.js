const express = require('express')
const fs = require('fs')
const app = express()

app.listen(3000, console.log("¡Servidor encendido!"))

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
    })

app.get("/canciones", (req, res) => {
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    res.json(canciones)
    })

app.post("/canciones", (req, res) => {
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    canciones.push(cancion)
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones))
    res.send("cancion agregada exitosamente")
    })

app.put("/canciones/:id", (req, res) => {
    const id = req.params.id
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones[index] = cancion
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones))
    res.send("cancion actualizada exitosamente")
    })

app.delete("/canciones/:id", (req, res) => {
    const id = req.params.id
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones.splice(index, 1)
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones))
    res.send("cancion eliminada exitosamente")
    })

