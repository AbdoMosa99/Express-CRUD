import mongoose from "mongoose";
import * as express from "express";
import * as bodyParser from "body-parser";

import { productRoute } from "./routes/product.routes";
import { commonRoutes } from "./routes/common.routes";


class App {
    public app: express.Application;
    
    constructor() {
        this.app = express();

        this.config();

        this.app.use("/api/v1/products", productRoute());
        this.app.use("/", commonRoutes());

        mongoose.connect('mongodb://127.0.0.1:27017/cequens');
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}


export default new App().app;
