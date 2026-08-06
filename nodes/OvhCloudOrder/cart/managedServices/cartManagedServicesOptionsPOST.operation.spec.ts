/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cartManagedServicesOptionsPOST.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('cartManagedServicesOptionsPOST operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(6);
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
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'cartId') return 'test-cartId';
				if (param === 'duration') return 'test-duration';
				if (param === 'itemId') return 1;
				if (param === 'planCode') return 'test-planCode';
				if (param === 'pricingMode') return 'test-pricingMode';
				if (param === 'quantity') return 1;
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
expect((client.httpPost as jest.Mock).mock.calls[0]).toEqual(['/order/cart/test-cartId/managedServices/options', {
				duration: 'test-duration',
				itemId: 1,
				planCode: 'test-planCode',
				pricingMode: 'test-pricingMode',
				quantity: 1,
				}]);
			expect(result).toMatchObject([mockData]);
		});
	});
});
