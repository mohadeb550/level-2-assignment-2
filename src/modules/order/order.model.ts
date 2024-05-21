
import { Schema, model  } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder> ({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type : String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type : Number,
        required: true
    }
})

const Order = model('Order', orderSchema)
export default Order;