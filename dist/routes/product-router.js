"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
exports.productsRoute = (0, express_1.Router)({});
exports.productsRoute.get("/", (req, res) => {
    var _a;
    const foundProduct = productRepositories.findProduct((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProduct);
});
exports.productsRoute.post("/", (req, res) => {
    const newProduct = productRepositories.createProduct(req.body.title);
    res.status(201).send(newProduct);
});
exports.productsRoute.get("/:id", (req, res) => {
    let product = productRepositories.findProductById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.put("/:id", (req, res) => {
    const isUpdate = productRepositories.updateProduct(+req.params.id, req.body.title);
    if (isUpdate) {
        let product = productRepositories.findProductById(+req.params.id);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.delete("/:id", (req, res) => {
    const isDelete = productRepositories.deleteProduct(+req.params.id);
    if (isDelete) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
