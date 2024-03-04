import {Router, Request, Response} from "express"


const commonRoutes = () => {
    const router = Router();

    // all other invalid routes -> 404
    router.all("*", (req: Request, res: Response) => {
        res.status(404).json({
            message: "Invalid URL! Please, check it and try again."
        });
    });
    return router;
};

export { commonRoutes }
