class AppError {
    constructor(statusCode, message, error, errorStack) {
        this.statusCode = statusCode
        this.message = message;
        if (error)
            this.error = error;
        if (errorStack)
            this.errors = errorStack;
    }
}

module.exports = AppError;