import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError";

export default 
(
    error: Error | ApiError, 
    req: Request, 
    res: Response, 
    next: NextFunction 
) => {
    console.log(error)
    if (error instanceof ApiError) {
        return res.status(error.status)
            .json( { message: error.message } )
    }
    return res.status(500)
        .json( { message: 'Unexpected error' } )
}