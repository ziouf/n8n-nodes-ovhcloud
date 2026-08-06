/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cartCheckoutPost.operation';

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

describe('cartCheckoutPost operation', () => {
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

		it('should call the correct API endpoint with body', async () => {
			const mockData = { orderId: 'test-order-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'cartId') return 'test-cart-id';
				if (param === 'autoPayWithPreferredPaymentMethod') return true;
				if (param === 'waiveRetractationPeriod') return false;
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/order/cart/test-cart-id/checkout', {
				autoPayWithPreferredPaymentMethod: true,
				waiveRetractationPeriod: false,
			});
			expect(result).toMatchObject([mockData]);
		});

		it('should use default boolean values when not specified', async () => {
			const mockData = { orderId: 'test-order-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'cartId') return 'test-cart-id';
				if (param === 'autoPayWithPreferredPaymentMethod') return false;
				if (param === 'waiveRetractationPeriod') return false;
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/order/cart/test-cart-id/checkout', {
				autoPayWithPreferredPaymentMethod: false,
				waiveRetractationPeriod: false,
			});
			expect(result).toMatchObject([mockData]);
		});
	});
});
