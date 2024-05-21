
import { z } from 'zod';

const orderValidationSchema = z.object({
    email: z.string().min(1, { message: 'Email must not be empty' }),
    productId: z.string().min(1, { message: 'Product ID must not be empty' }),
    price: z.number().min(0, { message: 'Price must be a number' }),
    quantity: z.number().min(0, { message: 'Quantity must be a non-negative number' }),
  });

export default orderValidationSchema;