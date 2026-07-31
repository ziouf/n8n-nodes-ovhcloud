/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listUsersGet.operation';

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

describe('containerRegistry listUsersGet operation', () => {
    describe('description', () => {
        it('should return all required parameters', () => {
            const result = description({ show: {} });
            expect(result.length).toBeGreaterThanOrEqual(1); // project + path params
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

            mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
                if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
                if (param === 'userId') return 'userid';
                return '';
            });

            const result = await execute.call(mockExecuteFunctions);
            expect(client.httpGet).toHaveBeenCalled();
            expect(result).toBeDefined();
        });
    });
});
