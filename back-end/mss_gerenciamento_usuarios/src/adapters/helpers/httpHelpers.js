

class HttpRequest {
    body={}
    headers={}
    constructor(body, headers){
        this.body = body
        this.headers = headers
    }
}

class HttpResponse {
    body= {}
    headers= {}
    statusCode= null
    constructor(statusCode,body, headers){
        this.body = body
        this.headers = headers
        this.statusCode = statusCode
    }
}

module.exports = {
    HttpRequest,
    HttpResponse
}
