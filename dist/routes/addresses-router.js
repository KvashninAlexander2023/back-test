"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRoute = void 0;
const express_1 = require("express");
const addresses = [
    { id: 1, value: "new 12" },
    { id: 2, value: "old 21" },
];
exports.addressesRoute = (0, express_1.Router)({});
exports.addressesRoute.get("/", (req, res) => {
    res.send(addresses);
});
exports.addressesRoute.get("/:id", (req, res) => {
    let address = addresses.find((p) => p.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
