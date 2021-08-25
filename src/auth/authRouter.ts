import { Router} from "express";
import jwt from "jsonwebtoken"

let authRouter = Router();

interface authFunction<User>{
    (user: User): User| undefined
}

authRouter.post("/", (req, res) => {

    let user = req.body;

    // impement own authentication logic
    const authUser: authFunction<any> = (user:any) => {user};

    const result = authUser(user);

    if(result){
        let secret: any = process.env.JWT_SECRET;
        let token = jwt.sign({user: result}, secret)
        res.json({token: token})
    }else{
        res.sendStatus(400);
    }
})

export default authRouter;