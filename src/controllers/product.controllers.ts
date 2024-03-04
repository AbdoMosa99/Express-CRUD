import { Request, Response } from "express";

import { Product } from "../models/product.model";


const createProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;

  if (!name || !price) {
    // return an unprocessable entity status code
    return res.status(422).json({
      message: "The fields, name and price, are required!",
    });
  }

  const productInput = {
    name,
    description,
    price,
  };

  const productDB = await Product.findOne({ name });
  if (productDB) {
    // return a conflict if product already exists
    return res.status(409).json({
      message: "Product with that name already exists",
    });
  }  

  const productCreated = await Product.create(productInput);
  return res.status(201).json({ _id: productCreated._id });
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find().select("_id name description price").exec();

  return res.status(200).json({ result: products });
};


export { createProduct, getAllProducts };
