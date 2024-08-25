const products = [
  { id: 1, title: "tomato" },
  { id: 2, title: "orange" },
];

export const productRepositories = {
  findProduct(title: string | null | undefined){
    if (title) {
      let searchString = title.toString();
      return products.filter((p) => p.title.indexOf(searchString) > -1)
    } else {
      return products
    }
  },

  createProduct(title:string){
    const newProduct = { id: +new Date(), title };
    products.push(newProduct);
    return newProduct
  },

  findProductById(id:number){
    return products.find((p) => p.id === id);
  },

  updateProduct(id:number, title:string){
    let product = products.find((p) => p.id === id);
    if (product) {
      product.title = title
      return true
    } else {
      return false
    }
  },
  deleteProduct(id:number){
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1);
        return true
      }
    }
    return false
  },
}
