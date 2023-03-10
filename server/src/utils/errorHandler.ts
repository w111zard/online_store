class ErrorHandler extends Error {
    status: number
    message: string
    
    constructor(status: number, message: string) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message: string) {
        return new ErrorHandler(404, message)
    }

    static internal(message: string) {
        return new ErrorHandler(500, message)
    }
}

export default ErrorHandler