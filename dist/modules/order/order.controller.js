"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
// create a new order 
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.body;
    try {
        const data = yield order_services_1.OrderServices.addOrderIntoDB(order);
        res.status(200).json({
            "success": true,
            "message": "Order created successfully!",
            "data": data
        });
    }
    catch (error) {
        res.json({
            "success": false,
            "message": error.message,
        });
    }
});
// get all orders 
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const data = yield order_services_1.OrderServices.getOrdersFromDB(email);
        res.status(200).json({
            "success": true,
            "message": "Orders fetched successfully!",
            "data": data
        });
    }
    catch (error) {
        res.json({
            "success": false,
            "message": error.message,
        });
    }
});
// get product by id 
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ProductServices.getProductByIdFromDB(req.params.productId);
        res.status(200).json({
            "success": true,
            "message": "Product fetched successfully!",
            "data": data
        });
    }
    catch (error) {
        res.json({
            "success": false,
            "message": error.message,
        });
    }
});
// update a single product 
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const newChanges = req.body;
    try {
        const data = yield ProductServices.updateProductById(productId, newChanges);
        res.status(200).json({
            "success": true,
            "message": "Product updated successfully!",
            "data": data
        });
    }
    catch (error) {
        res.json({
            "success": false,
            "message": error.message,
        });
    }
});
// delete a product 
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ProductServices.deleteProductById(req.params.productId);
        res.status(200).json({
            "success": true,
            "message": "Product deleted successfully!",
            "data": data
        });
    }
    catch (error) {
        res.json({
            "success": false,
            "message": error.message,
        });
    }
});
exports.OrderControllers = {
    createOrder, getOrders
};