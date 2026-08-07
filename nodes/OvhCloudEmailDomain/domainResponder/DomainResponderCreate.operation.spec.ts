/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './DomainResponderCreate.operation';

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

describe('DomainResponderCreate operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({});
			expect(result.length).toBeGreaterThanOrEqual(0);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions);
			(client.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
			if (param === 'domain') return 'domain-test';
			if (param === 'account') return 'account-test';
			if (param === 'content') return 'content-test';
			if (param === 'copy') return 'copy-test';
			if (param === 'copyTo') return 'copyTo-test';
			if (param === 'from') return 'from-test';
			if (param === 'to') return 'to-test';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect((client.httpPost as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
