"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const addProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.create(product);
});
const getProductsFromDB = (searchValue) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchValue ? {
        $or: [
            { name: { $regex: searchValue, $options: "i" } },
            { description: { $regex: searchValue, $options: "i" } },
            { category: { $regex: searchValue, $options: "i" } },
        ]
    } : {};
    return yield product_model_1.default.find(query);
});
const getProductByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findById(id);
});
const updateProductById = (id, newChanges) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedDoc = {
        $set: Object.assign({}, newChanges)
    };
    // return await Product.updateOne({ _id: id}, updatedDoc)
    return yield product_model_1.default.findByIdAndUpdate(id, updatedDoc);
});
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.deleteOne({ _id: id });
});
exports.ProductServices = {
    addProductIntoDB,
    getProductsFromDB,
    getProductByIdFromDB,
    updateProductById,
    deleteProductById
};
