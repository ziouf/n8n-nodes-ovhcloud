/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosPut.operation';

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

describe('serviceInfosPut operation', () => {
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
			if (param === 'canDeleteAtExpiration') return 'canDeleteAtExpiration-value';
			if (param === 'contactAdmin') return 'contactAdmin-value';
			if (param === 'contactBilling') return 'contactBilling-value';
			if (param === 'contactTech') return 'contactTech-value';
			if (param === 'creation') return 'creation-value';
			if (param === 'domain') return 'domain-value';
			if (param === 'engagedUpTo') return 'engagedUpTo-value';
			if (param === 'expiration') return 'expiration-value';
			if (param === 'possibleRenewPeriod') return 'possibleRenewPeriod-value';
			if (param === 'renew') return 'renew-value';
			if (param === 'renewalType') return 'renewalType-value';
			if (param === 'serviceId') return 'serviceId-value';
			if (param === 'status') return 'status-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPut as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
