const express = require('express')
const app = express()
const port = 2004;

app.get('/mercado', (req, res)=>{
    res.send("Mercadinho Nova Piaget")
})

app.listen(port, ()=>{
   console.log("Servidor está disponível") 
})