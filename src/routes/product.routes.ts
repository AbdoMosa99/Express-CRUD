import { Router } from "express";

import * as controllers from "../controllers/product.controllers"


const productRoute = () => {
  const router = Router();
  
  router.post("/", controllers.createProduct);
  router.get("/", controllers.getAllProducts);
  router.delete("/:id", controllers.deleteProduct);

  // TODO
  // router.get("/:id", (req, res) => {});
  // router.put("/:id", (req, res) => {});
  
  return router;
};


export { productRoute }
