import { TProduct } from "./product.interface"
import Product from "./product.model"


const addProductIntoDB = async (product: TProduct) => {
    return await Product.create(product)    
}

const getAllProductsFromDB = async ()=> {
    return await Product.find({});
}

const getProductByIdFromDB = async (id: string)=> {
    return await Product.findById(id);
}

const updateProductById = async (id: string, newChanges: object )=> {
    const updatedDoc = {
        $set : {...newChanges}
    }
    return await Product.updateOne({ _id: id}, updatedDoc)
}


const deleteProductById = async (id: string )=> {
    return await Product.deleteOne({ _id: id})
}




export const ProductServices = {
    addProductIntoDB,
    getAllProductsFromDB,
    getProductByIdFromDB,
    updateProductById,
    deleteProductById
}