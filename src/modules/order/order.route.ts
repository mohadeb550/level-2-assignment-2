
import express from 'express'
import { OrderControllers } from './order.controller';
const router = express.Router();



// create a new order
router.post('/' , OrderControllers.createOrder)

// get single order by email or all
router.get('/', OrderControllers.getOrders)


export const OrderRouter = router;