import express, {Request, Response } from "express"
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!22211')
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