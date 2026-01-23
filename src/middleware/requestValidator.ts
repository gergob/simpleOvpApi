import { Request, Response, NextFunction } from 'express';

interface RequestValidatorOptions {
    excludePaths: string[];
}

export default function isRequestValid(options: RequestValidatorOptions) {
    const API_HTTP_HEADER = 'X-SimpleOvpApi';
    const API_HTTP_HEADER_VALUE = 'USER_KEY_';

    return function(req: Request, res: Response, next: NextFunction) {
        if(req.method === 'OPTIONS') {
          return next();
        }
        if(req) {
            console.info("==> RequestValidator mw invoked for:" + req.path);
            const isPathExlcuded = options.excludePaths.indexOf(req.path) > -1;
            if (isPathExlcuded) {
                next();
            }
            else {
                const headerValue = req.get(API_HTTP_HEADER);
                console.log('headerValue: ', headerValue);
                if(headerValue && headerValue.length > API_HTTP_HEADER_VALUE.length) {
                    const userKey = headerValue.substring(API_HTTP_HEADER_VALUE.length);
                    console.log(userKey);
                    if(userKey) {
                        try {
                            console.log("==> userKey in request is:[" + userKey + "]");
                            const userKeyIdx = parseInt(userKey, 10);
                            if(userKeyIdx > -1 && userKeyIdx < 8) {
                                next();
                            }
                            else {
                                res.sendStatus(403);
                            }
                        }
                        catch(err) {
                            console.error(err);
                            res.sendStatus(403);
                        }
                    } else {
                        res.sendStatus(403);
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
