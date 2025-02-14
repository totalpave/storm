import { StormError } from './StormError';
import { ErrorCode } from './ErrorCode';
import { StatusCode } from './StatusCode';
export declare class ExpiredToken extends StormError {
    constructor(details?: any);
    getMessage(): string;
    getCode(): ErrorCode;
    getHTTPCode(): StatusCode;
}
