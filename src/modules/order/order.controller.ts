
import { Request, Response } from "express";
import { OrderServices } from "./order.services";


// create a new order 
const createOrder = async (req : Request, res: Response) => {
    const order = req.body;
   try{
    const data =  await OrderServices.addOrderIntoDB(order);

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