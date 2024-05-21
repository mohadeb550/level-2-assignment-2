
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

// get all orders 
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

// get product by id 
const getProductById = async (req : Request, res: Response) => {
   try{
    const data =  await ProductServices.getProductByIdFromDB(req.params.productId);

    res.status(200).json({
        "success" : true,
        "message" : "Product fetched successfully!",
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

// update a single product 
const updateSingleProduct = async (req : Request, res: Response) => {
    const { productId } = req.params;
    const newChanges = req.body;
   try{
    const data =  await ProductServices.updateProductById(productId, newChanges);

    res.status(200).json({
        "success" : true,
        "message" : "Product updated successfully!",
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

// delete a product 
const deleteProduct = async (req : Request, res: Response) => {
    try{
     const data =  await ProductServices.deleteProductById(req.params.productId);
 
     res.status(200).json({
         "success" : true,
         "message" : "Product deleted successfully!",
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