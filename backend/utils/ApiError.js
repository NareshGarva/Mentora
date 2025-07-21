class ApiError extends Error{
    constructor (
        statusCode,
        message="Something went wrong",
        stack="",
        errors = []
    ){
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.success = false
        this.data = null
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export default ApiError