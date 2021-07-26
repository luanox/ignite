const express = require('express')
const {v4: uuidv4} = require('uuid')

const app = express()
app.use(express.json())
const customers = []

app.post("/account",(req, res) => {
  const {cpf, name} = req.body

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf)

  if(customerAlreadyExists) return res.status(400).json({error: "Customer already exists!"})


  customers.push({
    id: uuidv4(),
    name,
    cpf,
    statement: []
  })

  return res.status(201).json(customers)
})

app.listen(3333)