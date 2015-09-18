# express-restful-response
Very simple way to response restfuly for express.

## Usage

```js
var express = require('express')
var app = express()
var response = require('express-restful-response').response

app.get('/', function (req, res) {
    var output = {};
    
    ...
    
    response(res, output, {
        status_code: 200,
        status_msg: 'Success!'
    })
})
```

## Options

```js
response(res, output, {
    status_code: 200,
    status_msg: undefined,
    jsonp: false
})
```

## Status codes

* 100: Continue
* 101: Switching_Protocols

* 200: OK
* 201: Created
* 202: Accepted
* 203: Non_Authoritative_Information
* 204: No_Content
* 205: Reset_Content
* 206: Partial_Content
* 207: Multi_Status

* 300: Multiple_Choices
* 301: Moved_Permanently
* 302: Found
* 303: See_Other
* 304: Not_Modified
* 305: Use_Proxy
* 306: Reserved
* 307: Temporary_Redirect

* 400: Bad_Request
* 401: Unauthorized
* 402: Payment_Required
* 403: Forbidden
* 404: Not_Found
* 405: Method_Not_Allowed
* 406: Not_Acceptable
* 407: Proxy_Authentication
* 408: Request_Timeout
* 409: Conflict
* 410: Gone
* 411: Length_Required
* 412: Precondition_Failed
* 413: Request_Entity_Too_Large
* 414: Request_URI_Too_Long
* 415: Unsupported_Media_Type
* 416: Requested_Range_Not_Satisfiable
* 417: Expectation_Failed
* 422: Unprocessable_Entity
* 423: Locked
* 424: Failed_Dependency

* 500: Internal_Server_Error
* 501: Not_Implemented
* 502: Bad_Gateway
* 503: Service_Unavailable
* 504: Gateway_Timeout
* 505: HTTP_Version_Not_Supported
* 507: Insufficient_Storage