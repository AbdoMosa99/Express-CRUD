import mongoose from "mongoose";


type ProductDocument = mongoose.Document & {
    name: string,
    description: string | null,
    price: number,
};

type ProductInput = {
    name: ProductDocument["name"];
    description: ProductDocument["description"];
    price: ProductDocument["price"];
};

const productSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
            unique: true,
        },
        description: {
            type: mongoose.Schema.Types.String,
            default: null,
        },
        price: {
            type: mongoose.Schema.Types.Number,
            required: true,
        }
    },
    {
        collection: "products",
        timestamps: true,
    },
);

const Product: mongoose.Model<ProductDocument> = mongoose.model<ProductDocument>("Product", productSchema);

export {Product, ProductInput, ProductDocument}
