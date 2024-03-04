import { Router } from "express";

import * as controllers from "../controllers/product.controllers"


const productRoute = () => {
  const router = Router();
  
  router.post("/", controllers.createproduct);
  router.get("/", controllers.getAllproducts);

  // TODO
  // router.get("/products/:id", (req, res) => {});
  // router.put("/products/:id", (req, res) => {});
  // router.delete("/products/:id", (req, res) => {});
  
  return router;
};


export { productRoute }
