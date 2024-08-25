"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepositories = void 0;
const products = [
    { id: 1, title: "tomato" },
    { id: 2, title: "orange" },
];
exports.productRepositories = {
    findProduct(title) {
        if (title) {
            let searchString = title.toString();
            return products.filter((p) => p.title.indexOf(searchString) > -1);
        }
        else {
            return products;
        }
    },
    createProduct(title) {
        const newProduct = { id: +new Date(), title };
        products.push(newProduct);
        return newProduct;
    },
    findProductById(id) {
        return products.find((p) => p.id === id);
    },
    updateProduct(id, title) {
        let product = products.find((p) => p.id === id);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    },
};
