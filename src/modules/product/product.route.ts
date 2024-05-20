
import express, { Request, Response } from 'express'
import { ProductControllers } from './product.controller';
const router = express.Router();


// create a new product 
router.post('/' , ProductControllers.createProduct)


export const ProductRouter = router;