export interface IRequestBody<T> extends Express.Request {
    body: T    
}

export interface IJwtPayload {
    id: number
    role: [string]
    iat: number
    exp: number
}