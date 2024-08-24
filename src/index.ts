import express, {Request, Response } from "express"
// const express = require('express')

const app = express()
const port = process.env.PORT || 5000

const products = [{id:1, title:"tomato"},{id:2, title:"orange"}]
const addresses = [{id:1, value:"new 12"},  {id:2, value:"old 21"}]

app.get('/', (req:Request, res:Response) => {
  res.send("Hello")
})

app.get('/products/', (req:Request, res:Response) => {
  if(req.query.title){
    let searchString = req.query.title.toString()
    res.send(products.filter((p)=> p.title.indexOf(searchString) > -1))
  } else {
    res.send(products)
  }

})

app.get('/products/:id', (req:Request, res:Response) => {
  //req.params.id - параметр который мы получаем при запросе
  let product = products.find((p)=>p.id === +req.params.id)
  if(product){
    res.send(product)
  } else {
    res.send(404)
  }

})

app.get('/addresses', (req:Request, res:Response) => {
  res.send(addresses)
})

app.get('/addresses/:id', (req:Request, res:Response) => {
  let address = addresses.find((p)=> p.id === +req.params.id)
  if(address){
    res.send(address)
  } else {
    res.send(404)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//запустить nodemon - yarn nodemon index.js 
// yarn init --yes
// yarn add express
// yarn nodemon --inspect index.js
// yarn add typescript ts-node @types/node @types/express --dev
// yarn tsc --init
//yarn tsc -w - режим вотчера(смотрящего - следящего за изменениями)
// запустить приложение на двух терминалах 1 - yarn dev 2 - yarn watch