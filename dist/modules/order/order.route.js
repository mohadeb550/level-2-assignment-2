"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
// create a new order
router.post('/', order_controller_1.OrderControllers.createOrder);
// get single order by email or all
router.get('/', order_controller_1.OrderControllers.getOrders);
exports.OrderRouter = router;
