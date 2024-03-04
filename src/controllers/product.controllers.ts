import { Request, Response } from "express";

import { Product, ProductInput } from "../models/product.model";


const createproduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;

  if (!name || !price) {
    // return an unprocessable entity status code
    return res.status(422).json({
      message: "The fields, name and price, are required!",
    });
  }

  const productInput: ProductInput = {
    name,
    description,
    price,
  };

  try {
    const productCreated = await Product.create(productInput)
    return res.status(201).json({ _id: productCreated._id });
  }
  catch (e: unknown) {
    // return a conflict if product already exists
    return res.status(409).json({
      message: "Product with that name already exists",
    });
  }
};

const getAllproducts = async (req: Request, res: Response) => {
  const products = await Product.find().select("_id name description price").exec();

  return res.status(200).json({ result: products });
};


export { createproduct, getAllproducts };
