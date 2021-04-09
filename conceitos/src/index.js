const express = require("express")

const app = express()

// app.json()

app.get("/", (req, res) => {
    return res.json({message: "Hellooo"})
})

app.listen(3333)

console.log('Funcionou');