import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";

export default 
(
    err: Error | ErrorHandler, 
    req: Request, 
    res: Response, 
    next: NextFunction 
) => {
    console.log('in error')
    if (err instanceof ErrorHandler) {
        return res.status(err.status)
            .json( { message: err.message } )
    }
    return res.status(500)
        .json( { message: 'Unexpected error' } )
}