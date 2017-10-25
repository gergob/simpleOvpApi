
module.exports = function isRequestValid(options) {
    var API_HTTP_HEADER = 'X-SimpleOvpApi';
    var API_HTTP_HEADER_VALUE = 'USER_KEY_';

    return function(req, res, next) {
        if(req.method === 'OPTIONS') {
          return next();
        }
        if(req) {
            console.info("==> RequestValidator mw invoked for:" + req.path);
            var isPathExlcuded = options.excludePaths.indexOf(req.path) > -1;
            if (isPathExlcuded) {
                next();
            }
            else {
                var headerValue = req.get(API_HTTP_HEADER);
                console.log('headerValue: ', headerValue);
                if(headerValue && headerValue.length > API_HTTP_HEADER_VALUE.length) {
                    var userKey = headerValue.substring(API_HTTP_HEADER_VALUE.length);
                    console.log(userKey);
                    if(userKey) {
                        try {
                            console.log("==> userKey in request is:[" + userKey + "]");
                            var userKeyIdx = parseInt(userKey, 10);
                            if(userKeyIdx > -1 && userKeyIdx < 8) {
                                next();
                            }
                            else {
                                res.sendStatus(403);
                            }
                        }
                        catch(err) {
                            console.error(err);
                        }
                    }
                }
                else {
                    res.sendStatus(403);
                }
            }
        }
        else {
          res.sendStatus(403);
        }
    }
}
