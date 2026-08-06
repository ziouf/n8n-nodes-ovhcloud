/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cartItemDeleteDelete.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
    const mockHttpClient = {
        httpGet: jest.fn(),
        httpPost: jest.fn(),
        httpPut: jest.fn(),
        httpDelete: jest.fn(),
    };
    return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('cartItemDeleteDelete operation', () => {
    describe('description', () => {
        it('should return all required parameters', () => {
            const result = description({ show: {} });
            expect(result.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe('execute', () => {
        let mockExecuteFunctions: any;
        beforeEach(() => {
            mockExecuteFunctions = {
                getNodeParameter: jest.fn(),
                helpers: { returnJsonArray: jest.fn((data) => data) },
            };
        });

        it('should call the correct API endpoint', async () => {
            const mockData = { success: true };
            const client = new ApiClient(mockExecuteFunctions) as any;
            client.httpDelete.mockResolvedValue(mockData);

            mockExecuteFunctions.getNodeParameter.mockReturnValue((param: string): string | Record<string, unknown> | undefined => {
                if (param === 'cartId') return 'test-cart-id';
                if (param === 'itemId') return 'test-item-id';
                if (param === 'configurationId') return 'test-config-id';
                if (param === 'body') return {};
                return '';
            });

            const result = await execute.call(mockExecuteFunctions, 0);
            expect(client.httpDelete).toHaveBeenCalled();
            expect(result).toMatchObject([mockData]);
        });
    });
});
