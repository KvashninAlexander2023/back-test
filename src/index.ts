import express, { Request, Response } from "express";
import { productsRoute } from "./routes/products-router";
import { addressesRoute } from "./routes/addresses-router";
// const express = require('express')

const app = express();
const port = process.env.PORT || 5000;


// app.use(express.urlencoded({extended: true}));
app.use(express.json())
//const postData = JSON.parse(req.body);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use("/products", productsRoute)
app.use("/addresses", addressesRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//запустить nodemon - yarn nodemon index.js
// yarn init --yes
// yarn add express
// yarn nodemon --inspect index.js
// yarn add typescript ts-node @types/node @types/express --dev
// yarn tsc --init
//yarn tsc -w - режим вотчера(смотрящего - следящего за изменениями)
// запустить приложение на двух терминалах 1 - yarn dev 2 - yarn watch
// app.use(express.json()) - добавить для преобразования боди в строку
