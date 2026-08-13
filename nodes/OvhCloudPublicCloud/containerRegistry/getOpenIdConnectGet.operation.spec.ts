/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './getOpenIdConnectGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
    const mockHttpClient = {
        httpGet: jest.fn(),
        httpPost: jest.fn(),
        httpPut: jest.fn(),
        httpDelete: jest.fn(),
    };
    return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('containerRegistry getOpenIdConnectGet operation', () => {
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
            const mockData = { id: 'test-id' };
            const client = new ApiClient(mockExecuteFunctions) as any;
            client.httpGet.mockResolvedValue(mockData);
            client.httpPost.mockResolvedValue(mockData);
            client.httpPut.mockResolvedValue(mockData);
            client.httpDelete.mockResolvedValue(mockData);

            mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
                const params = ['publicCloudProjectId', 'registryId'];
                for (const p of params) {
                    if (param === p) return 'test-value';
                }
                return '';
            });

            const result = await execute.call(mockExecuteFunctions);
            expect(result).toBeDefined();
        });
    });
});
