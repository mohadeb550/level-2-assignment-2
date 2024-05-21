import { TOrder } from "./order.interface"
import Order from "./order.model"



const addOrderIntoDB = async (order: TOrder) => {
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