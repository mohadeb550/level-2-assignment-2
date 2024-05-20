import { TProduct } from "./product.interface"
import Product from "./product.model"


const addProductIntoDB = async (product: TProduct) => {
    return await Product.create(product)    
}


export const ProductServices = {
    addProductIntoDB,
}