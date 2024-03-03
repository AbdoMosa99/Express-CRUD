import * as express from "express";
import * as bodyParser from "body-parser";
import { productRoute } from "../routes/product_route";
import mongoose from "mongoose";

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
    }
    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use("/products", productRoute());

        mongoose.connect('mongodb://127.0.0.1:27017/cequens');

    }
}

export default new App().app;
