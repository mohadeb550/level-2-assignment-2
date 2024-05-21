"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, { message: 'Type must not be empty' }),
    value: zod_1.z.string().min(1, { message: 'Value must not be empty' }),
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, { message: 'Quantity must be a non-negative number' }),
    inStock: zod_1.z.boolean(),
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'Name must not be empty' }),
    description: zod_1.z.string().min(1, { message: 'Description must not be empty' }),
    price: zod_1.z.number().min(0, { message: 'Price must be a non-negative number' }),
    category: zod_1.z.string().min(1, { message: 'Category must not be empty' }),
    tags: zod_1.z.array(zod_1.z.string().min(1, { message: 'Tags must not contain empty strings' })),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema,
});
exports.default = productValidationSchema;
