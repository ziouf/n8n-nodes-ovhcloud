/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cartCouponDelete.operation';

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

describe('cartCouponDelete operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(2);
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

		it('should call the correct API endpoint with query params', async () => {
			const mockData = { success: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'cartId') return 'test-cart-id';
				if (param === 'coupon') return 'TEST-COUPON';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/order/cart/test-cart-id/coupon', {
				coupon: 'TEST-COUPON',
			});
			expect(result).toMatchObject([mockData]);
		});
	});
});
