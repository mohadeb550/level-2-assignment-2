
import express from 'express'
import { OrderControllers } from './order.controller';
const router = express.Router();



// create a new order
router.post('/' , OrderControllers.createOrder)

// get single order or all
router.get('/', OrderControllers.getOrders)



// // update a product by id 
// router.put('/:productId', ProductControllers.updateSingleProduct)

// // delete a product by id 
// router.delete('/:productId', ProductControllers.deleteProduct)


export const OrderRouter = router;