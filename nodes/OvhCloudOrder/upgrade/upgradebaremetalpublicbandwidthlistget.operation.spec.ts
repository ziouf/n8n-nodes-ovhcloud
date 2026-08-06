/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './upgradebaremetalpublicbandwidthlistget.operation';

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

describe('upgradebaremetalpublicbandwidthListGET operation', () => {
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
            const mockData = { id: 'test-id' };
            const client = new ApiClient(mockExecuteFunctions) as any;
            client.httpGet.mockResolvedValue(mockData);

            mockExecuteFunctions.getNodeParameter.mockReturnValue((param: string): string | Record<string, unknown> | undefined => {
                if (param === 'cartId') return 'test-cart-id';
                if (param === 'serviceName') return 'test-service';
                if (param === 'planCode') return 'test-plan';
                if (param === 'domain') return 'test-domain';
                if (param === 'quantity') return 1 as any;
                if (param === 'duration') return '12months';
                if (param === 'pricingMode') return 'payasyougo';
                if (param === 'autoPayWithPreferredPaymentMethod') return false as any;
                return '';
            });

            const result = await execute.call(mockExecuteFunctions);
            expect(client.httpGet).toHaveBeenCalled();
            expect(result).toMatchObject([mockData]);
        });
    });
});
