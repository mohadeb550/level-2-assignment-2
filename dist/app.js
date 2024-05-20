"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/product/product.route");
const app = (0, express_1.default)();
// use json body parser 
app.use(express_1.default.json());
// use routers 
app.use('/api/products', product_route_1.ProductRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
