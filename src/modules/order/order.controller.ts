
import { Request, Response } from "express";
import { OrderServices } from "./order.services";
import orderValidationSchema from "./order.validation";



// create a new order 
const createOrder = async (req : Request, res: Response) => {
    const order = req.body;
   try{
     // validating order data by zod  
     const zodParsedData = orderValidationSchema.parse(order)

    const result =  await OrderServices.addOrderIntoDB(zodParsedData);
    res.json(result)
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
    const result =  await OrderServices.getOrdersFromDB(email as string);

    res.status(200).json(result)
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