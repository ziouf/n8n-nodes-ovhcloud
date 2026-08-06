/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cartIpLoadbalancingGET.operation';

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

describe('cartIpLoadbalancingGET operation', () => {
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

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'cartId') return 'test-cartId';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
expect((client.httpGet as jest.Mock).mock.calls[0]).toEqual(['/order/cart/test-cartId/ipLoadbalancing']);
			expect(result).toMatchObject([mockData]);
		});
	});
});
