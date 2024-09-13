const { captureError } = require('../lib/errorHandler');

describe('Error Handler', () => {
    it('should capture error details correctly', () => {
        const error = new Error('Test Error');
        const context = captureError(error);

        expect(context.message).toBe('Test Error');
        expect(context.stack).toBeDefined();
        expect(context.type).toBe('Error');
    });
});
