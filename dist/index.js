"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello");
});
app.use("/products", products_router_1.productsRoute);
app.use("/addresses", addresses_router_1.addressesRoute);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
