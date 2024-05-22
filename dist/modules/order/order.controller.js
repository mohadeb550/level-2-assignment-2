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
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
const order_validation_1 = __importDefault(require("./order.validation"));
// create a new order 
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.body;
    try {
        // validating order data by zod  
        const zodParsedData = order_validation_1.default.parse(order);
        const result = yield order_services_1.OrderServices.addOrderIntoDB(zodParsedData);
        res.json(result);
    }
    catch (error) {
        res.json({
            "success": false,
            "message": error.message,
        });
    }
});
// get orders 
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const result = yield order_services_1.OrderServices.getOrdersFromDB(email);
        res.status(200).json(result);
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
