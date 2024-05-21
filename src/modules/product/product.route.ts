
import express from 'express'
import { ProductControllers } from './product.controller';
const router = express.Router();


// create a new product 
router.post('/' , ProductControllers.createProduct)

// get products 
router.get('/', ProductControllers.getProducts)

// get single product by id 
router.get('/:productId', ProductControllers.getProductById)


// update a product by id 
router.put('/:productId', ProductControllers.updateSingleProduct)

// delete a product by id 
router.delete('/:productId', ProductControllers.deleteProduct)


export const ProductRouter = router;