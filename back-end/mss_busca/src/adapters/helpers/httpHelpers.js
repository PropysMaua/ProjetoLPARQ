

class HttpRequest {
    body={}
    queryParameters={}
    headers={}
    constructor(body, queryParameters, headers){
        this.body = body
        this.queryParameters = queryParameters
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
