import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    let token: any = req.headers["authorization"]?.split(" ")[1];

    let secret:any = process.env.JWT_SECRET;
    
    jwt.verify(token, secret, (err: any, decoded: any) => {

        if(err){
            res.sendStatus(400);
        }else{
            next()
        }
    })


}

export default authMiddleware;