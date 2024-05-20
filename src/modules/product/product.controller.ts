
import { Request, Response } from "express";
import { ProductServices } from "./product.services";


const createProduct = async (req : Request, res: Response) => {
    const product = req.body;
   try{
    const data =  await ProductServices.addProductIntoDB(product);

    res.status(200).json({
        "success" : true,
        "message" : "Product created successfully!",
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

export const ProductControllers = {
    createProduct,
}