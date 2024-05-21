"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/product/product.route");
const order_route_1 = require("./modules/order/order.route");
const app = (0, express_1.default)();
// use json body parser 
app.use(express_1.default.json());
// use routers 
app.use('/api/products', product_route_1.ProductRouter);
app.use('/api/orders', order_route_1.OrderRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.all('*', (req, res) => {
    res.status(404).json({
        "success": false,
        "message": "Route not found"
    });
});
exports.default = app;
