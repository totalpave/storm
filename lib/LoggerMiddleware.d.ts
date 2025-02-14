import { Middleware } from './Middleware';
import { Request } from './Request';
import { Response } from './Response';
import { IRequestResponse } from './IRequestResponse';
export declare class LoggerMiddleware extends Middleware {
    constructor();
    execute(request: Request, response: Response, options?: any): Promise<IRequestResponse>;
}
