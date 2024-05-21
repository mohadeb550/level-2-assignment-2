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

// const getProductByIdFromDB = async (id: string)=> {
//     return await Product.findById(id);
// }

// const updateProductById = async (id: string, newChanges: object )=> {
//     const updatedDoc = {
//         $set : {...newChanges}
//     }
//     return await Product.updateOne({ _id: id}, updatedDoc)
// }


// const deleteProductById = async (id: string )=> {
//     return await Product.deleteOne({ _id: id})
// }




export const OrderServices = {
    addOrderIntoDB, getOrdersFromDB
    
}