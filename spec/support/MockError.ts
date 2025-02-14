
import {StormError, IAdditionalErrorDetails} from '../../src/StormError';

export class MockError extends StormError {
    public constructor(error: string) {
        super(error);
    }

    public getAdditionalDetails(): IAdditionalErrorDetails {
        var details: IAdditionalErrorDetails = super.getAdditionalDetails();
        details.mock = true;
        return details;
    }

    public getMessage(): string {
        return 'This is a mock error';
    }

    public getCode(): number {
        return 1;
    }
}
