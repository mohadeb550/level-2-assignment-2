"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, { message: 'Email must not be empty' }),
    productId: zod_1.z.string().min(1, { message: 'Product ID must not be empty' }),
    price: zod_1.z.number().min(0, { message: 'Price must be a number' }),
    quantity: zod_1.z.number().min(0, { message: 'Quantity must be a non-negative number' }),
});
exports.default = orderValidationSchema;
