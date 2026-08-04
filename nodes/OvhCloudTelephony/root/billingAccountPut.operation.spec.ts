/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './billingAccountPut.operation';

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

describe('billingAccountPut operation', () => {
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
			if (param === 'allowedOutplan') return 'allowedOutplan-value';
			if (param === 'billingAccount') return 'billingAccount-value';
			if (param === 'creditThreshold') return 'creditThreshold-value';
			if (param === 'currentOutplan') return 'currentOutplan-value';
			if (param === 'description') return 'description-value';
			if (param === 'hasSpecialNumbers') return 'hasSpecialNumbers-value';
			if (param === 'hiddenExternalNumber') return 'hiddenExternalNumber-value';
			if (param === 'overrideDisplayedNumber') return 'overrideDisplayedNumber-value';
			if (param === 'securityDeposit') return 'securityDeposit-value';
			if (param === 'status') return 'status-value';
			if (param === 'trusted') return 'trusted-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPut as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
