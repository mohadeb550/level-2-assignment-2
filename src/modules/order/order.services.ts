import Product from "../product/product.model"
import { TOrder } from "./order.interface"
import Order from "./order.model"



// create new order  
const addOrderIntoDB = async (order: TOrder) => {

    // check if the product exists in the product collection by id
    // const isExist = await Product.exists({ _id: order.productId})
    // if(!isExist){return { isProductExist : false}};
    
    return await Order.create(order)    
}


const getOrdersFromDB = async (userEmail: string)=> {
    const query: { email? : string } = {}
    if(userEmail){ query.email = userEmail}

    return await Order.find(query);
}



export const OrderServices = {
    addOrderIntoDB, getOrdersFromDB
    
}