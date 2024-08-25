import { Request, Response, Router } from "express";
import { productRepositories } from "../repositories/product-repositories";



export const productsRoute = Router({})


productsRoute.post("/", (req: Request, res: Response) => {
  const newProduct = productRepositories.createProduct(req.body.title)
  res.status(201).send(newProduct);
});



productsRoute.put("/:id", (req: Request, res: Response) => {
  //req.params.id - параметр который мы получаем при запросе
  
  const isUpdate = productRepositories.updateProduct(+req.params.id, req.body.title)

  if(isUpdate){
    let product = productRepositories.findProductById(+req.params.id )
    res.send(product);
  } else {
    res.send(404);
  }
});

productsRoute.get("/", (req: Request, res: Response) => {

 const foundProduct = productRepositories.findProduct(req.query.title?.toString())
 
    res.send(foundProduct);
  })

productsRoute.get("/:id", (req: Request, res: Response) => {
  //req.params.id - параметр который мы получаем при запросе
  let product = productRepositories.findProductById(+req.params.id )
  if (product) {
    res.send(product);
  } else {
    res.send(404);
  }
});

productsRoute.delete("/:id", (req: Request, res: Response) => {
  //req.params.id - параметр который мы получаем при запросе
  const isDelete = productRepositories.deleteProduct(+req.params.id)
  if(isDelete){
    res.send(204)
  } else {
    res.send(404)
  }
});
















