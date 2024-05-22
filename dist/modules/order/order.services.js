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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const product_services_1 = require("../product/product.services");
// create new order  
const addOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    // find stock product from products collection
    const stockProduct = yield product_model_1.default.findById(order.productId);
    if (stockProduct) {
        // check if the ordered quantity exceeds the stock quantity 
        if (order.quantity > stockProduct.inventory.quantity) {
            return {
                "success": false,
                "message": 'Insufficient quantity available in inventory'
            };
        }
    }
    else {
        return {
            "success": false,
            "message": 'Product not found'
        };
    }
    // new order creating 
    const data = yield order_model_1.default.create(order);
    // after completing order 
    // updating inventory of stock product 
    if (data) {
        const remainQuantity = stockProduct.inventory.quantity - order.quantity;
        //    updating the inventory by product service function 
        const result = yield product_services_1.ProductServices.updateProductById(order.productId, {
            inventory: {
                quantity: remainQuantity,
                inStock: remainQuantity === 0 ? false : true
            }
        });
        // sending response object 
        if (result.modifiedCount || result.matchedCount) {
            return { "success": true, "message": 'Order created successfully!', data };
        }
    }
});
const getOrdersFromDB = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (userEmail) {
        query.email = userEmail;
    }
    const data = yield order_model_1.default.find(query);
    if (data.length) {
        return {
            "success": true,
            "message": "Orders fetched successfully!",
            data
        };
    }
    else {
        return {
            "success": false,
            "message": "Order not found",
        };
    }
});
exports.OrderServices = {
    addOrderIntoDB, getOrdersFromDB
};
