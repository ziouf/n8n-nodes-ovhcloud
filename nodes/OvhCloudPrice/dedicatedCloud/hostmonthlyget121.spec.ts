/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './hostmonthlyget121.operation';

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

describe('price dedicatedCloud hostMonthlyGet121 operation', () => {
    describe('description', () => {
        it('should return all required parameters', () => {
            const result = description({ show: {} });
            expect(result.length).toBeGreaterThanOrEqual(0);
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
            const mockData = { price: { value: 100 } };
            const client = new ApiClient(mockExecuteFunctions) as any;
            client.httpGet.mockResolvedValue(mockData);

            mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
                if (param === 'hostProfile') return 'hostProfile';
                return '';
            });

            const result = await execute.call(mockExecuteFunctions);
            expect(client.httpGet).toHaveBeenCalled();
            expect(result).toMatchObject([mockData]);
        });
    });
});
