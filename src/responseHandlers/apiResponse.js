class ApiResponse {
    constructor(statusCode, message, result) {
        this.statusCode = statusCode;
        this.message = message;
        if (result) {
            this.data = result
        }
    }
}

module.exports = ApiResponse;