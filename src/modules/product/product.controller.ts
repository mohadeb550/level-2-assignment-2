
import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import productValidationSchema from "./product.validation";

// create a new product 
const createProduct = async (req : Request, res: Response) => {
    const product = req.body;
   try{
     // validating product data by zod  
     const zodParsedProduct = productValidationSchema.parse(product)

    const data =  await ProductServices.addProductIntoDB(zodParsedProduct);

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

// get products 
const getProducts = async (req : Request, res: Response) => {
    const { searchTerm } = req.query;
   try{
    const data =  await ProductServices.getProductsFromDB(searchTerm as string);

    res.status(200).json({
        "success" : true,
        "message" : searchTerm? `Products matching search term '${searchTerm}' fetched successfully!` : 'Products fetched successfully!',
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




export const ProductControllers = {
    createProduct, getProducts, getProductById, updateSingleProduct, deleteProduct
}