
import { z } from 'zod';

const variantSchema = z.object({
    type: z.string().min(1, { message: 'Type must not be empty' }),
    value: z.string().min(1, { message: 'Value must not be empty' }),
  });
  
  
const inventorySchema = z.object({
    quantity: z.number().min(0, { message: 'Quantity must be a non-negative number' }),
    inStock: z.boolean(),
  });


const productValidationSchema = z.object({
    name: z.string().min(1, { message: 'Name must not be empty' }),
    description: z.string().min(1, { message: 'Description must not be empty' }),
    price: z.number().min(0, { message: 'Price must be a non-negative number' }),
    category: z.string().min(1, { message: 'Category must not be empty' }),
    tags: z.array(z.string().min(1, { message: 'Tags must not contain empty strings' })),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
  });

export default productValidationSchema;