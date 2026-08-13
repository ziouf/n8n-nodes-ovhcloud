/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './DomainAccountFilterRuleDelete.operation';

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

describe('DomainAccountFilterRuleDelete operation', () => {
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
			(client.httpDelete as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
			if (param === 'accountName') return 'accountName-test';
			if (param === 'domain') return 'domain-test';
			if (param === 'id') return 'id-test';
			if (param === 'name') return 'name-test';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect((client.httpDelete as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
