import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    let authenticated: boolean = false;
    
    if(authenticated){
        next()
    }else{
        res.sendStatus(400);
    }
}

export default authMiddleware;