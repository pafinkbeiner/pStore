import { Router} from "express";

let authRouter = Router();

authRouter.post("/", (req, res) => {
    res.json("Login")
})

export default authRouter;