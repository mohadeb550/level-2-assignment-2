
import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import Product from "../product/product.model";
import orderValidationSchema from "./order.validation";



// create a new order 
const createOrder = async (req : Request, res: Response) => {
    const order = req.body;
   try{
     // validating order data by zod  
     const zodParsedData = orderValidationSchema.parse(order)

    // const isExist = await Product.exists({ _id: order.productId})

    const data =  await OrderServices.addOrderIntoDB(zodParsedData);

    res.status(200).json({
        "success" : true,
        "message" : "Order created successfully!",
        "data" : data
    })
   }
   catch(error: any){
    res.json({
        "success" : false,
        "message" : error.message,
    })
   }
}

// get orders 
const getOrders = async (req : Request, res: Response) => {
    const { email } = req.query;
   try{
    const data =  await OrderServices.getOrdersFromDB(email as string);

    res.status(200).json({
        "success" : true,
        "message" : "Orders fetched successfully!",
        "data" : data
    })
   }
   catch(error: any){
    res.json({
        "success" : false,
        "message" : error.message,
    })
   }
}


export const OrderControllers = {
    createOrder, getOrders
}