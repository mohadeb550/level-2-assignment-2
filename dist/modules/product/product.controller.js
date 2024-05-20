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
exports.ProductControllers = void 0;
const product_services_1 = require("./product.services");
// create a new product 
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    try {
        const data = yield product_services_1.ProductServices.addProductIntoDB(product);
        res.status(200).json({
            "success": true,
            "message": "Product created successfully!",
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
// get all products 
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_services_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            "success": true,
            "message": "Products fetched successfully!",
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
        const data = yield product_services_1.ProductServices.getProductByIdFromDB(req.params.productId);
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
        const data = yield product_services_1.ProductServices.updateProductById(productId, newChanges);
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
        const data = yield product_services_1.ProductServices.deleteProductById(req.params.productId);
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
exports.ProductControllers = {
    createProduct, getAllProducts, getProductById, updateSingleProduct, deleteProduct
};
