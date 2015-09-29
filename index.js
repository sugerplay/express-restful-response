/**
 * Usage
 * res: response object
 * output: output js object
 * options: options for response
 *      status_code: status code
 *      status_msg: status message
 */
 
var setDefault = function (v, def) {
    return (typeof v === 'undefined')? def : v;
};
    
exports.restfulEnd = function (req, res, next) {
    
    res.restfulEnd = function (output, options) {
        options = setDefault(options, {});
        options.status_code = setDefault(options.status_code, 200);
        options.jsonp = setDefault(options.jsonp, false);
        
        if (typeof options.status_msg !== 'undefined') {
            if (typeof output !== 'Object')
                output = {};
            output.message = options.status_msg;
        }
        
        res.setHeader('Content-Type', 'text/json; charset=utf-8');
        res.status(options.status_code);
        
        if (options.jsonp) {
            res.jsonp(output);
        }
        else {
            res.end(JSON.stringify(output));
        }
    };
    
    next();
}

// Informational
exports.Continue = 100;
exports.Switching_Protocols = 101;

// Successful
exports.OK = 200;
exports.Created = 201;
exports.Accepted = 202;
exports.Non_Authoritative_Information = 203;
exports.No_Content = 204;
exports.Reset_Content = 205;
exports.Partial_Content = 206;
exports.Multi_Status = 207;

// Redirection
exports.Multiple_Choices = 300;
exports.Moved_Permanently = 301;
exports.Found = 302;
exports.See_Other = 303;
exports.Not_Modified = 304;
exports.Use_Proxy = 305;
exports.Reserved = 306;
exports.Temporary_Redirect = 307;

// Client Error
exports.Bad_Request = 400;
exports.Unauthorized = 401;
exports.Payment_Required = 402;
exports.Forbidden = 403;
exports.Not_Found = 404;
exports.Method_Not_Allowed = 405;
exports.Not_Acceptable = 406;
exports.Proxy_Authentication = 407;
exports.Request_Timeout = 408;
exports.Conflict = 409;
exports.Gone = 410;
exports.Length_Required = 411;
exports.Precondition_Failed = 412;
exports.Request_Entity_Too_Large = 413;
exports.Request_URI_Too_Long = 414;
exports.Unsupported_Media_Type = 415;
exports.Requested_Range_Not_Satisfiable = 416;
exports.Expectation_Failed = 417;
exports.Unprocessable_Entity = 422;
exports.Locked = 423;
exports.Failed_Dependency = 424;

// Server Error
exports.Internal_Server_Error = 500;
exports.Not_Implemented = 501;
exports.Bad_Gateway = 502;
exports.Service_Unavailable = 503;
exports.Gateway_Timeout = 504;
exports.HTTP_Version_Not_Supported = 505;
exports.Insufficient_Storage = 507;