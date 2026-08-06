/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cartItemConfigurationUpdatePut.operation';

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

describe('cartItemConfigurationUpdatePut operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(3);
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
			const mockData = { id: 'test-config-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'cartId') return 'test-cart-id';
				if (param === 'itemId') return 'test-item-id';
				if (param === 'configurationId') return 'test-config-id';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/order/cart/test-cart-id/item/test-item-id/configuration/test-config-id',
			);
			expect(result).toMatchObject([mockData]);
		});
	});
});
