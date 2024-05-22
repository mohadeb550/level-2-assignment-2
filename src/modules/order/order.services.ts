
import Product from "../product/product.model"
import { TOrder } from "./order.interface"
import Order from "./order.model"
import { TProduct } from "../product/product.interface";
import { ProductServices } from "../product/product.services";



// create new order  
const addOrderIntoDB = async (order: TOrder) => {

    // find stock product from products collection
    const stockProduct: TProduct | null = await Product.findById(order.productId)

    if(stockProduct){
        // check if the ordered quantity exceeds the stock quantity 
        if(order.quantity > stockProduct.inventory.quantity){
            return {
                 "success" : false, 
                 "message": 'Insufficient quantity available in inventory'
                }
        }
    }else{
        return { 
            "success" : false, 
            "message": 'Product not found'
        }}
        // new order creating 
    const data =  await Order.create(order)


    // after completing order 
    // updating inventory of stock product 
    if(data){
       const remainQuantity = stockProduct.inventory.quantity - order.quantity;

    //    updating the inventory by product service function 
      const result =  await ProductServices.updateProductById(order.productId, {
            inventory : {
                quantity : remainQuantity , 
                inStock : remainQuantity === 0 ? false : true
            }
        })
        // sending response object 
       if(result.modifiedCount || result.matchedCount){
        return { "success": true, "message": 'Order created successfully!', data}
       }
    }
    
}


const getOrdersFromDB = async (userEmail: string)=> {
    const query: { email? : string } = {}
    if(userEmail){ query.email = userEmail}

    const data =  await Order.find(query);

    if(data.length){
        return {
            "success" : true,
            "message" : "Orders fetched successfully!",
             data
        }
    }else{
        return {
            "success" : false,
            "message" : "Order not found",
        }
    }
}



export const OrderServices = {
    addOrderIntoDB, getOrdersFromDB
    
}