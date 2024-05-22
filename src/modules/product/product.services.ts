import { TProduct } from "./product.interface"
import Product from "./product.model"


const addProductIntoDB = async (product: TProduct) => {
    return await Product.create(product)    
}


const getProductsFromDB = async (searchValue: string)=> {

   const query = searchValue? { 
   $or : [
    { name: { $regex : searchValue , $options: "i"}},
    { description: { $regex : searchValue , $options: "i"}},
    { category: { $regex : searchValue , $options: "i"}},
   ]
    } : {}

    return await Product.find(query);
}



const getProductByIdFromDB = async (id: string)=> {
    return await Product.findById(id);
}

const updateProductById = async (id: string, newChanges: object )=> {
    const updatedDoc = {
        $set : {...newChanges}
    }
    // return await Product.updateOne({ _id: id}, updatedDoc)
    return await Product.findByIdAndUpdate(id, updatedDoc)
}


const deleteProductById = async (id: string )=> {
    return await Product.deleteOne({ _id: id})
}




export const ProductServices = {
    addProductIntoDB,
    getProductsFromDB,
    getProductByIdFromDB,
    updateProductById,
    deleteProductById
}