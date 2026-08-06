/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './licenseWindowsOptionsGet.operation';

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

describe('licenseWindowsOptionsGet operation', () => {
    describe('description', () => {
        it('should return product parameter', () => {
            const result = description({ show: {} });
            expect(result).toHaveLength(1);
            expect(result[0]).toMatchObject({
                displayName: 'Product',
                name: 'product',
                type: 'string',
																default: 'licenseWindows',
            });
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
            const mockData = { product: 'licenseWindowsOptions' };
            const client = new ApiClient(mockExecuteFunctions) as any;
            client.httpGet.mockResolvedValue(mockData);

            mockExecuteFunctions.getNodeParameter.mockReturnValue((param: string): string => {
                if (param === 'product') return 'licenseWindowsOptions';
                return '';
            });

            const result = await execute.call(mockExecuteFunctions, 0);
            expect(client.httpGet).toHaveBeenCalled();
            expect(result).toMatchObject([mockData]);
        });
    });
});
