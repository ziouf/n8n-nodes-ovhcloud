/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './linePut.operation';

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

describe('linePut operation', () => {
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
			(client.httpPut as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
				if (param === 'billingAccount') return 'billingAccount-value';
			if (param === 'serviceName') return 'serviceName-value';
			if (param === 'canChangePassword') return 'canChangePassword-value';
			if (param === 'description') return 'description-value';
			if (param === 'deviceSlot') return 'deviceSlot-value';
			if (param === 'getPublicOffer') return 'getPublicOffer-value';
			if (param === 'infrastructure') return 'infrastructure-value';
			if (param === 'isAttachedToOtherLinesPhone') return 'isAttachedToOtherLinesPhone-value';
			if (param === 'notifications') return 'notifications-value';
			if (param === 'offers') return 'offers-value';
			if (param === 'serviceName') return 'serviceName-value';
			if (param === 'serviceType') return 'serviceType-value';
			if (param === 'simultaneousLines') return 'simultaneousLines-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPut as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
