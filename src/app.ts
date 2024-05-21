import express from 'express'
import { ProductRouter } from './modules/product/product.route'
import { OrderRouter } from './modules/order/order.route'
const app = express()

// use json body parser 
app.use(express.json())

// use routers 
app.use('/api/products', ProductRouter)
app.use('/api/orders', OrderRouter)





app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app